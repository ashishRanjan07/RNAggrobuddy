import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Data from '../../../assets/json/Category.json';
import AppColor from '../../../constant/AppColor';
import {responsive} from '../../../constant/Responsive';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../componets/CustomHeader';
const Learn = () => {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setFilteredData(Data.Farming_Products_Category);
    setOriginalData(Data.Farming_Products_Category);
  }, []);

  const handleSearch = (text) => {
    if (!text || text === '') {
      setFilteredData(originalData);
    } else {
      const newData = originalData.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(newData);
    }
  };

  //   console.log(Data, 'Line 5');
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderHolder}
        key={item.id}
        onPress={() => navigation.navigate('Product Category', {item})}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <StatusBar backgroundColor={AppColor.primary} barStyle={'dark-content'} />
      <CustomHeader title={'Guide'} onSearch={handleSearch}  />
      <View style={styles.flatListHolder}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  flatListHolder: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
  },
  renderHolder: {
    borderWidth: 2,
    backgroundColor: AppColor.white,
    flexDirection: 'column',
    width: '45%',
    elevation: 10,
    borderColor: AppColor.white,
    alignItems: 'center',
    gap: responsive(10),
    borderRadius: responsive(10),
    padding: responsive(15),
    margin: responsive(10),
  },
  image: {
    height: responsive(125),
    width: responsive(150),
    borderRadius: responsive(10),
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
});
