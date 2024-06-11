import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../constant/AppColor';
import CustomHeader from '../CustomHeader';
import AddNewPostForm from './AddNewPostForm';

const AddNewPost = ({route}) => {
    const {title,edit,data} = route.params;
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.primary} />
      <CustomHeader title={title} />
      <AddNewPostForm title={title} edit={edit ? data :''} />
    </View>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
});
