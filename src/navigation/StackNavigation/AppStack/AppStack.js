import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductCategory from '../../../componets/learn/ProductCategory';
import BottomNavigation from '../../bottomNavigaton/BottomNavigation';
import AddNewPost from '../../../componets/myPost/AddNewPost';
import PrivacyPolicy from '../../../componets/profile/PrivacyPolicy';
import Address from '../../../componets/profile/Address';
import EditAddressForm from '../../../componets/profile/EditAddressForm';
import ReferAndEarn from '../../../screens/AppScreens/Profile/ReferAndEarn';
import Weather from '../../../componets/profile/Weather';
import AgricultureNews from '../../../componets/profile/AgricultureNews';
import RateListWebScrapping from '../../../componets/profile/RateListWebScrapping';
import SoilTesting from '../../../componets/profile/SoilTesting';
import ProductDetailsScreens from '../../../componets/shop/ProductDetailsScreens';
import BuyNow from '../../../componets/shop/BuyNow';
import CropDoctor from '../../../componets/home/CropDoctor';
import Insurance from '../../../componets/insurance/Insurance';
import KYC from '../../../componets/insurance/KYC';
import IdentityProofVerication from '../../../componets/insurance/IdentityProofVerication';
import BankVerification from '../../../componets/insurance/BankVerification';
import CropMonitoring from '../../../componets/cropMonitoring/CropMonitoring';
import DrawerNavigation from '../../drawerNavigation/DrawerNavigation';
import Order from '../../../componets/order/Order';


const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
  <Stack.Navigator>
    {/* <Stack.Screen name='Product Category' component={ProductCategory} /> */}
    <Stack.Screen name ='BottomTab' component={DrawerNavigation} options={{headerShown:false}}/>
    <Stack.Screen name ='Product Category' component={ProductCategory} options={{headerShown:false}}/>
        <Stack.Screen name='Add Product' component={AddNewPost} options={{headerShown:false}}/>
        <Stack.Screen name='Privacy Policy' component={PrivacyPolicy} options={{headerShown:true}}/>
        <Stack.Screen name='Save and Add Address' component={Address} options={{headerShown:true}}/>
        <Stack.Screen name="Edit Address" component={EditAddressForm} options={{headerShown:true}}/>
        <Stack.Screen name="Refer And Earn" component={ReferAndEarn} options={{headerShown:true}}/>
        <Stack.Screen name="Weather Alert" component={Weather} options={{headerShown:false}}/>
        <Stack.Screen name='Latest News' component={AgricultureNews} options={{headerShown:false}}/>
        <Stack.Screen name='Rate List' component={RateListWebScrapping} options={{headerShown:true}}/>
        <Stack.Screen name='Soil Test Booking' component={SoilTesting} options={{headerShown:true}}/>
        <Stack.Screen name='Product Details' component={ProductDetailsScreens} options={{headerShown:true}}/>
        <Stack.Screen name='Buy Now' component={BuyNow} options={{headerShown:true}}/>
        <Stack.Screen name='Crop Doctor' component={CropDoctor} options={{headerShown:true}}/>
        <Stack.Screen name='Insurance' component={Insurance} options={{headerShown:true}}/>
        <Stack.Screen name='KYC' component={KYC} options={{headerShown:true}}/>
        <Stack.Screen name='Add ID Proof' component={IdentityProofVerication} options={{headerShown:true}}/>
        <Stack.Screen name='Bank verification' component={BankVerification} options={{headerShown:true}}/>
        <Stack.Screen name='Crop Monitoring' component={CropMonitoring} options={{headerShown:true}}/>
        <Stack.Screen name='Order' component={Order} options={{headerShown:false}}/>

  </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})