import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import ImagePath from '../../constant/ImagePath';
import ServiceCard from './ServiceCard';
import { useNavigation } from '@react-navigation/native';

const HomeServices = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.label}>Our Services</Text>
      <View style={styles.serviceHolder}>
        <ServiceCard title={'Program'} image={ImagePath.farmerProgram} handleAction={()=> null} />
        <ServiceCard title={'Mandi Price'} image={ImagePath.mandiPrice} handleAction={()=> navigation.navigate('Rate List')}/>
        <ServiceCard title={'Crop Doctor'} image={ImagePath.cropDoctor} handleAction={()=> navigation.navigate('Crop Doctor')} />
        <ServiceCard title={'Weather'} image={ImagePath.weather} handleAction={()=>navigation.navigate('Weather Alert')} />
        <ServiceCard title={'Soil Testing'} image={ImagePath.soilTest} handleAction={()=>navigation.navigate('Soil Test Booking')} />
        <ServiceCard title={'Crop Monitoring'} image={ImagePath.cropMonitor} handleAction={()=>navigation.navigate('Crop Monitoring')} />
        <ServiceCard title={'Crop Insurance'} image={ImagePath.cropInsurance} handleAction={()=>navigation.navigate('Insurance')} />
        <ServiceCard title={'Nearest Store'} image={ImagePath.nearStore} handleAction={()=>{}} />
      </View>
    </View>
  );
};

export default HomeServices;

const styles = StyleSheet.create({
  main: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    elevation: responsive(10),
    padding: responsive(10),
    paddingHorizontal: responsive(15),
    marginBottom:responsive(10)
  },
  label: {
    fontSize: responsive(22),
    fontFamily: 'OpenSans-Bold',
    color: AppColor.primary,
  },
  serviceHolder: {
    marginVertical: responsive(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsive(15),
  },
  imageStyle: {
    width: responsive(80),
    height: responsive(80),
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Medium',
  },
  card: {
    borderWidth: 2,
    padding: responsive(10),
    alignItems: 'center',
    gap: 10,
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    elevation: responsive(10),
  },
});
