import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsive} from '../constant/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppColor from '../constant/AppColor';
const CustomHeader = ({title}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <Ionicons name="menu" size={responsive(30)} color={AppColor.white} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity>
        <Ionicons name="search" size={responsive(30)} color={AppColor.white} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    padding: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text:{
    fontSize:responsive(24),
    color:AppColor.black,
    fontFamily:'OpenSans-Medium'
  }
});
