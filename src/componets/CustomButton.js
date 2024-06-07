import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppColor from '../constant/AppColor'
import { responsive } from '../constant/Responsive'
const CustomButton = ({title,handleAction}) => {
  return (
    <TouchableOpacity onPress={() => handleAction()} style={styles.main} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    main:{
        borderWidth:2,
        borderColor:AppColor.white,
        marginVertical:responsive(10),
        backgroundColor:AppColor.white,
        alignItems:'center',
        padding:responsive(15),
        borderRadius:responsive(10)
        // alignSelf:'center'
    },
    text:{
        color:AppColor.black,
        fontSize:responsive(18),
        fontFamily:'OpenSans-600'
    }
})