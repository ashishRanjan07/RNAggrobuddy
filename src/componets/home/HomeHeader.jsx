import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import Entypo from 'react-native-vector-icons/Entypo';
import AppColor from '../../constant/AppColor';
import Feather from 'react-native-vector-icons/Feather';
const HomeHeader = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.iconHolder}>
        <Entypo
          name="location"
          size={responsive(30)}
          color={AppColor.dark_Green}
        />
        <Text style={styles.text}>Patna 800007 Bihar India</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          name="bell"
          size={responsive(30)}
          color={AppColor.dark_Green}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsive(10),
    paddingHorizontal: responsive(15),
    justifyContent: 'space-between',
    backgroundColor: AppColor.white,
    borderRadius:responsive(10),
    marginVertical:responsive(10),
    elevation:responsive(10),
    width:'95%',
    alignSelf:'center'

  },
  text: {
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    width: '65%',
    // textAlign:'center'
  },
  iconHolder: {
    flexDirection: 'row',
    gap: responsive(20),
    alignItems: 'center',
  },
});
