import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../../constant/AppColor';
import HomeHeader from '../../../componets/home/HomeHeader';
import HomeSearch from '../../../componets/home/HomeSearch';
import HomeCropPicker from '../../../componets/home/HomeCropPicker';
import HomeServices from '../../../componets/home/HomeServices';

const Home = () => {
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.primary} />
      <HomeHeader />
      <HomeSearch />
      <HomeCropPicker />
      <HomeServices/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
});
