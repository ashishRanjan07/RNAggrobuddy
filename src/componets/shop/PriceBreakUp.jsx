import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';

const PriceBreakUp = ({item, discountedAmount, newPrice, actualPrice}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>Price Details</Text>
      <View style={styles.separateLine} />
      <View style={styles.priceHolder}>
        <Text style={styles.headerText}>Actual Price</Text>
        <Text style={styles.headerText}>{actualPrice}</Text>
      </View>
      <View style={styles.priceHolder}>
        <Text style={styles.headerText}>Discount Amount</Text>
        <Text style={styles.headerText}>{discountedAmount}</Text>
      </View>
      <View style={styles.priceHolder}>
        <Text style={styles.headerText}>Delivery Charges</Text>
        <Text style={styles.headerText}>{'0'}</Text>
      </View>
      <View style={styles.separateLine} />
      <View style={styles.priceHolder}>
        <Text style={styles.headerText}>Total Amount</Text>
        <Text style={styles.headerText}>{newPrice}</Text>
      </View>
    </View>
  );
};

export default PriceBreakUp;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: responsive(15),
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    elevation: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    borderRadius: responsive(10),
  },
  headerText: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
    marginVertical: responsive(10),
  },
  separateLine: {
    borderWidth: 1,
    backgroundColor: AppColor.light_Grey,
    borderColor: AppColor.light_Grey,
  },
  priceHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
