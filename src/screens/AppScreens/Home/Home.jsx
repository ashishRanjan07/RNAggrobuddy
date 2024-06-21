import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../../constant/AppColor';
import HomeHeader from '../../../componets/home/HomeHeader';
import HomeSearch from '../../../componets/home/HomeSearch';
import HomeCropPicker from '../../../componets/home/HomeCropPicker';
import HomeServices from '../../../componets/home/HomeServices';
import CustomHeader from '../../../componets/CustomHeader';

const Home = () => {
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.primary} />
      <CustomHeader title={"Aggrobuddy"}/>
      <HomeHeader />
      <HomeSearch />
      <HomeCropPicker />
      <HomeServices/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
});
