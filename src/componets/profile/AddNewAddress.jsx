import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../constant/AppColor'
import AddressForm from './AddressForm'

const AddNewAddress = () => {
  return (
    <View style={styles.main}>
     <AddressForm/>
    </View>
  )
}

export default AddNewAddress

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:AppColor.white,
    }
})