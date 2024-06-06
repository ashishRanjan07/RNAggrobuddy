import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../constant/AppColor';
import {responsive} from '../constant/Responsive';

const CustomButton = ({title}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  main: {
    // backgroundColor: AppColor.white,
    padding: responsive(10),
    alignItems: 'center',
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
});
