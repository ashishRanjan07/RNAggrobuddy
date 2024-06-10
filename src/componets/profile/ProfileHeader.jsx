import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColor from '../../constant/AppColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsive} from '../../constant/Responsive';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ImagePath from '../../constant/ImagePath';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      {/* Upper Header */}
      <View style={styles.HeaderHolder}>
        <TouchableOpacity
          style={{width: '20%'}}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={responsive(30)}
            color={AppColor.white}
          />
        </TouchableOpacity>
        <View style={{width: '60%', alignItems: 'center', gap: responsive(10)}}>
          <Text style={styles.text}>AggroBuddy</Text>
          <Text style={styles.secondaryText}>For Farmer</Text>
        </View>
        <View style={{width: '20%'}} />
      </View>
      {/* Profile Card Holder */}
      <View style={styles.cardHolder}>
        <View style={styles.contentHolder}>
          <View style={{gap: responsive(5)}}>
            <Text style={styles.nameText}>Ashish Ranjan</Text>
            <View style={styles.phoneNumberView}>
              <Ionicons
                name="call-outline"
                size={responsive(25)}
                color={AppColor.primary}
              />
              <Text style={styles.callText}>6206416452</Text>
            </View>
            <TouchableOpacity style={styles.phoneNumberView}>
              <AntDesign
                name="edit"
                size={responsive(25)}
                color={AppColor.primary}
              />
              <Text style={styles.callText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.ImageHolder}>
            <Image
              source={ImagePath.farmer}
              resizeMode="center"
              style={styles.imageStyle}
            />
            <View style={styles.cameraIconHolder}>
              <Feather name="camera"  size={responsive(20)}color={AppColor.white}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.dark_Green,
    borderBottomLeftRadius: responsive(10),
    borderBottomRightRadius: responsive(10),
  },
  HeaderHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    paddingVertical: responsive(20),
  },
  text: {
    fontSize: responsive(28),
    color: AppColor.white,
    // fontWeight:'bold',
    fontFamily: 'OpenSans-Bold',
  },
  secondaryText: {
    fontSize: responsive(18),
    color: AppColor.white,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '900',
  },
  cardHolder: {
    padding: responsive(10),
    borderRadius: responsive(10),
    width: '95%',
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    marginBottom: responsive(20),
  },
  contentHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsive(20),
    alignItems: 'center',
  },
  callText: {
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
  },
  nameText: {
    color: AppColor.black,
    fontSize: responsive(22),
    fontFamily: 'OpenSans-Bold',
  },
  phoneNumberView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(10),
  },
  ImageHolder: {
    borderWidth: 2,
    width: responsive(100),
    borderRadius: responsive(50),
    padding: responsive(10),
    alignItems: 'center',
  },
  imageStyle: {
    width: responsive(60),
    height: responsive(75),
  },
  cameraIconHolder:{
    borderWidth:2,
    borderColor:AppColor.primary,
    padding:10,
    borderRadius:responsive(30),
    backgroundColor:AppColor.light_Green,
    position:'absolute',
    bottom:0,
    right:-10

  }
});
