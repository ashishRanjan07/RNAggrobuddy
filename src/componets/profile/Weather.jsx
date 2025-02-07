import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import requestLocationPermission from '../requestLocationPermission';
import {MapPinIcon, CalendarDaysIcon} from 'react-native-heroicons/solid';
import AppColor from '../../constant/AppColor';
import {BarIndicator} from 'react-native-indicators';
import {responsive} from '../../constant/Responsive';
import {debounce} from 'lodash';
import {fetchLocations, fetchWeatherForecast} from '../../api/weather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {theme} from '../../theme';
import {weatherImages} from '../../constant';
import {getData, storeData} from '../../utils/asyncStorage';
const Weather = () => {
  const [weatherData, setWeatherData] = useState(true);
  const [locations, setLocations] = useState([]);
  const [showSearch, toggleSearch] = useState(false);
  const [weather, setWeather] = useState({});

  const handleSearch = value => {
    if (value.length > 2) {
      fetchLocations({cityName: value}).then(data => {
        setLocations(data);
      });
    }
  };

  useEffect(() => {
    requestLocationPermission()
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData('city');
    let cityName = 'Patna';
    if (myCity) cityName = myCity;
    fetchWeatherForecast({
      cityName,
      days: '7',
    }).then(data => {
      setWeather(data);
      setWeatherData(false);
    });
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const {location, current} = weather;
  const handleLocation = loc => {
    // console.log("location", loc);
    setWeatherData(true);
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7',
    }).then(data => {
      setWeatherData(false);
      setWeather(data);
      storeData('city', loc.name);
      // console.log('got forecast data', data);
    });
  };

  return (
    <View style={{flex:1}}>
      <ImageBackground
        blurRadius={70}
        source={require('../../assets/image/bg.png')}
        className="absolute w-full h-full"
      />
      {weatherData ? (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.white} />
          <Text style={styles.loaderText}>Please Wait...</Text>
        </View>
      ) : (
        <View className="flex flex-1">
          {/* search Section */}
          <View
            style={{marginVertical: responsive(15)}}
            className="mx-4 relative z-50">
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: showSearch
                  ? theme.bgWhite(0.2)
                  : 'transparent',
              }}>
              {showSearch ? (
                <TextInput
                  onChangeText={handleTextDebounce}
                  placeholder="search city"
                  placeholderTextColor={'lightgray'}
                  className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                />
              ) : null}

              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                className="rounded-full p-3 m-1"
                style={{backgroundColor: theme.bgWhite(0.3)}}>
                <Fontisto
                  name="search"
                  size={responsive(25)}
                  color={AppColor.white}
                />
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                {locations.map((loc, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder
                    ? ' border-b-2 border-b-gray-400'
                    : '';
                  return (
                    <TouchableOpacity
                      onPress={() => handleLocation(loc)}
                      key={index}
                      className={
                        'flex-row items-center border-0 p-3 px-4 mb-1 ' +
                        borderClass
                      }>
                      <Feather
                        name="map-pin"
                        size={responsive(20)}
                        color={AppColor.light_Grey}
                      />
                      <Text className="text-black text-lg ml-2">
                        {loc?.name},{loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
          {/* forcast View */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{marginVertical:responsive(20),padding:responsive(10),gap:responsive(20),height:'100%'}}>
              {/* location */}
              <Text className="text-white text-center text-2xl font-bold">
                {location?.name},
                <Text className="text-lg font-semibold text-gray-300">
                  {' ' + location?.country}
                </Text>
              </Text>
              {/* weather Image */}
              <View className="flex-row justify-center">
                <Image
                  source={weatherImages[current?.condition?.text]}
                  className="w-52 h-52"
                />
              </View>
              {/* degree celsius  */}
              <View className="space-y-2">
                <Text className="text-center font-bold text-white text-6xl ml-5">
                  {current?.temp_c}&#176;
                </Text>
                <Text className="text-center text-white text-xl tracking-widest">
                  {current?.condition?.text}
                </Text>
              </View>
              {/* other stats */}
              <View className="flex-row justify-between mx-4">
                <View className="flex-row space-x-2 items-center">
                  <Image
                    source={require('../../assets/icons/wind.png')}
                    className="w-6 h-6"
                  />
                  <Text className="text-white font-semibold text-base">
                    {current?.wind_kph}km
                  </Text>
                </View>
                <View className="flex-row space-x-2 items-center">
                  <Image
                    source={require('../../assets/icons/drop.png')}
                    className="w-6 h-6"
                  />
                  <Text className="text-white font-semibold text-base">
                    {current?.humidity}%
                  </Text>
                </View>
                <View className="flex-row space-x-2 items-center">
                  <Image
                    source={require('../../assets/icons/sun.png')}
                    className="w-6 h-6"
                  />
                  <Text className="text-white font-semibold text-base">
                    {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                  </Text>
                </View>
              </View>
              <View className="mb-2 space-y-3">
              <View className="flex-row items-center mx-5 space-x-2">
                <CalendarDaysIcon
                  size={responsive(22)}
                  color={AppColor.white}
                />
                <Text className="text-white text-base">Daily Forecast</Text>
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}>
                {weather?.forecast?.forecastday?.map((item, index) => {
                  let date = new Date(item.date);
                  let options = {weekday: 'long'};
                  let dayName = date.toLocaleDateString('en-US', options);
                  dayName = dayName.split(',')[0];
                  return (
                    <View
                      key={index}
                      className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                      style={{backgroundColor: theme.bgWhite(0.15)}}>
                      <Image
                        source={weatherImages[item?.day?.condition?.text]}
                        className="h-11 w-11"
                      />
                      <Text className="text-white">{dayName}</Text>
                      <Text className="text-white text-xl font-semibold">
                        {item?.day?.avgtemp_c}&#176;
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            </View>

           
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
  },
  loaderText: {
    color: AppColor.white,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
    position: 'absolute',
    top: '55%',
    // bottom:0,
    right: 0,
    left: 0,
  },
});
