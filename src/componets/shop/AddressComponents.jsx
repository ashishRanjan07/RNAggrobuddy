import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { responsive } from '../../constant/Responsive'
import CustomButton from '../CustomButton'
import AppColor from '../../constant/AppColor'
import Data from '../../assets/json/Address.json';
import { useNavigation } from '@react-navigation/native'
const AddressComponents = () => {
    const navigation = useNavigation();
    const [addressData, setAddressData] = useState(Data[0]);
    const handleAddressChange = () => {
        navigation.navigate('Save and Add Address');
      };
  return (
    <View style={styles.addressHolder}>
    <View style={{gap: 10}}>
      <View style={styles.rating}>
        <Text style={styles.description}>Deliver to: </Text>
        <Text style={styles.price}>{addressData.Name}</Text>
        <View
          style={{
            backgroundColor: AppColor.light_Grey,
            borderRadius: responsive(5),
            padding: responsive(4),
            marginHorizontal: responsive(5),
          }}>
          <Text style={styles.title}>{addressData.TypeOfAddress}</Text>
        </View>
      </View>
      <Text style={styles.price}>
        {addressData.HouseNo} {addressData.RoadName} {addressData.City}
      </Text>
    </View>

    <CustomButton
      title={'Change'}
      handleAction={handleAddressChange}
      color={AppColor.light_Grey}
    />
  </View>
  )
}

export default AddressComponents

const styles = StyleSheet.create({
    addressHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsive(15),
        alignItems: 'center',
      },
      rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      },
      
  price: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  description: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Grey,
  }, 
  title: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Grey,
  },
})