import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';

const InsuranceBenefitsCard = ({title, image}) => {
//   console.log(title, image, 'Line 5');
  return (
    <View style={styles.main}>
     <Image source={image} resizeMode='stretch' style={styles.imageStyle}/>
     <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default InsuranceBenefitsCard;

const styles = StyleSheet.create({
  main: {
    width: '46%',
    borderWidth: 2,
    padding: responsive(10),
    alignItems: 'center',
    alignSelf:'center',
    gap: 10,
    borderRadius: responsive(10),
    backgroundColor: AppColor.dim_Grey,
    borderColor: AppColor.dim_Grey,
    elevation: responsive(10),
  },
  imageStyle:{
    width:responsive(100),
    height:responsive(125),
    borderRadius:responsive(10)
  },
  text:{
    textAlign:'center',
    color:AppColor.primary,
    fontSize:responsive(16),
    fontFamily:'OpenSans-Medium'
  }
});
