import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomProgressBar from '../CustomProgressBar';
import AppColor from '../../constant/AppColor';
import AddressComponents from './AddressComponents';
import AddressProductDetails from './AddressProductDetails';
import PriceBreakUp from './PriceBreakUp';

const BuyNow = ({route}) => {
  const {item} = route.params;
  // console.log(item,"Line 9")
  return (
    <ScrollView style={styles.main}>
      <CustomProgressBar />
      <AddressComponents />
      <AddressProductDetails item={item} />
      {/* Product Details Sections */}
      {/* <PriceBreakUp item={item}/> */}
    </ScrollView>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
});
