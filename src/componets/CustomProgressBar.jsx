import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../constant/AppColor';
import {responsive} from '../constant/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomProgressBar = () => {
  return (
    <View style={styles.main}>
      <View
        style={styles.viewHolder}>
        <View style={styles.itemHolder}>
          <AntDesign
            name="checkcircle"
            size={responsive(25)}
            color={AppColor.primary}
          />
        </View>
        <View style={{borderWidth: 2, width: '40%',borderColor:AppColor.dark_Green,backgroundColor:AppColor.dark_Green}} />
        <View style={styles.itemHolder}>
          <AntDesign
            name="downcircleo"
            size={responsive(25)}
            color={AppColor.primary}
          />
        </View>
        <View style={{borderWidth: 2, width: '40%',borderColor:AppColor.light_Grey,backgroundColor:AppColor.light_Grey}} />
        <View style={styles.itemHolder}>
          <AntDesign
            name="minuscircleo"
            size={responsive(25)}
            color={AppColor.primary}
          />
        </View>
      </View>
      <View
        style={styles.lowerViewHolder}>
        <View style={styles.itemHolder}>
          <Text style={styles.text}>Address</Text>
        </View>

        <View style={styles.itemHolder}>
          <Text style={styles.text}>Order Summary</Text>
        </View>

        <View style={styles.itemHolder}>
          <Text style={styles.text}>Payment</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomProgressBar;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.white,
    padding: responsive(20),
    borderColor: AppColor.white,
    elevation: responsive(10),
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderRadius:responsive(5)
  },
  text: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'openSans-Medium',
  },
  itemHolder: {
    alignItems: 'center',
    gap: responsive(5),
    // padding:responsive(10)
  },
  viewHolder:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  lowerViewHolder:{
    marginVertical: responsive(5),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '105%',
  }
});
