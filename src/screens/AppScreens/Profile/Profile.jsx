import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../../constant/AppColor'
import ProfileHeader from '../../../componets/profile/ProfileHeader'
import ProfileList from '../../../componets/profile/ProfileList'

const Profile = () => {
  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeArea}/>
      <StatusBar backgroundColor={AppColor.primary} barStyle={"dark-content"}/>
      <ProfileHeader/>
      <ProfileList/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.primary,
  },
  safeArea:{
    backgroundColor:AppColor.primary
  }
})