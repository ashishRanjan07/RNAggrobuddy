import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../constant/AppColor'
import NewRegistrationForm from '../../componets/newRegistration/NewRegistrationForm'

const NewRegistration = () => {
  return (
    <View style={styles.main}>
     <SafeAreaView style={styles.safeAreaView}/>
     <StatusBar backgroundColor={AppColor.primary} barStyle={"dark-content"}/>
     <NewRegistrationForm/>
    </View>
  )
}

export default NewRegistration

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.primary
  },
  safeAreaView:{
    backgroundColor:AppColor.primary
  }
})