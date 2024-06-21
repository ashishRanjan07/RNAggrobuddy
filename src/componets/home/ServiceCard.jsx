import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';

const ServiceCard = ({title, image, handleAction}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleAction()}>
      <Image source={image} resizeMode="contain" style={styles.imageStyle} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  imageStyle: {
    width: responsive(90),
    height: responsive(50),
  },
  text: {
    textAlign: 'center',
    fontSize: responsive(14),
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Bold',
  },
  card: {
    width: responsive(110),
    borderWidth: 2,
    padding: responsive(10),
    alignItems: 'center',
    gap: 10,
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    elevation: responsive(10),
  },
});
