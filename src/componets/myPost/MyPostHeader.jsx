import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsive } from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const MyPostHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.backIconHolder} onPress={()=> navigation.goBack()}>
        <Ionicons name="arrow-back" size={responsive(30)} color={AppColor.white} />
      </TouchableOpacity>
      <View style={styles.title}>
      <Text style={styles.text}>My Post</Text>
      </View>
      
      <TouchableOpacity style={styles.addIcon} onPress={()=> navigation.goBack()}>
        <MaterialIcons name="add-box" size={responsive(30)} color={AppColor.white} />
        <Text>Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyPostHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:AppColor.light_Green,
    padding:responsive(5)
  },
  backIconHolder:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'15%',
  },
  title:{
    width:'60%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  addIcon:{
    width:'20%',
    alignItems:'center'
  },
  text:{
    fontSize:responsive(18),
    color:AppColor.white,
    fontFamily:'OpenSans-Medium'
  }
});
