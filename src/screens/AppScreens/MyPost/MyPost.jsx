import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppColor from '../../../constant/AppColor';
import MyPostHeader from '../../../componets/myPost/MyPostHeader';
import MyPostList from '../../../componets/myPost/MyPostList';
import Data from '../../../assets/json/MyPost.json';
import {responsive} from '../../../constant/Responsive';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../componets/CustomHeader';
const MyPost = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.primary} />
      <CustomHeader title={"My Post"}/>
      <MyPostList data={Data} />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.push('Add Product', {title: 'Add Product'})}>
        <Octicons
          name="diff-added"
          size={responsive(30)}
          color={AppColor.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyPost;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
    zIndex: 1,
  },
  safeArea: {
    backgroundColor: AppColor.primary,
  },
  floatingButton: {
    position: 'absolute',
    // zIndex:2,
    bottom: responsive(25),
    right: responsive(25),
    width: responsive(50),
    height: responsive(50),
    borderRadius: responsive(10),
    backgroundColor: AppColor.dark_Green,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: responsive(10),
  },
});
