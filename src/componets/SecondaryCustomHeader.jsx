import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {responsive} from '../constant/Responsive';
import AppColor from '../constant/AppColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SecondaryCustomHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={{width: '20%'}}
        onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={responsive(30)}
          color={AppColor.white}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default SecondaryCustomHeader;

const styles = StyleSheet.create({
  main: {
    padding: responsive(10),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    width: '60%',
    fontSize: responsive(24),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
});
