import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../../screens/AuthScreens/Splash';
import Login from '../../../screens/AuthScreens/login/Login';
import OTP from '../../../screens/AuthScreens/OTP';
import NewRegistration from '../../../screens/AuthScreens/NewRegistration';
import BottomNavigation from '../../bottomNavigaton/BottomNavigation';
import ProductCategory from '../../../componets/learn/ProductCategory';
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
import AppStack from '../AppStack/AppStack';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name ='OTP' component={OTP} options={{headerShown:false}}/>
        <Stack.Screen name ='New Account' component={NewRegistration} options={{headerShown:false}}/>
        <Stack.Screen name='App Stack' component={AppStack} options={{headerShown:false}}/>
        {/* <Stack.Screen name ='BottomTab' component={BottomNavigation} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name ='Product Category' component={ProductCategory} options={{headerShown:false}}/>
        <Stack.Screen name='Add Product' component={AddNewPost} options={{headerShown:false}}/>
        <Stack.Screen name='Privacy Policy' component={PrivacyPolicy} options={{headerShown:true}}/>
        <Stack.Screen name='Save and Add Address' component={Address} options={{headerShown:true}}/>
        <Stack.Screen name="Edit Address" component={EditAddressForm} options={{headerShown:true}}/>
        <Stack.Screen name="Refer And Earn" component={ReferAndEarn} options={{headerShown:true}}/>
        <Stack.Screen name="Weather Alert" component={Weather} options={{headerShown:false}}/>
        <Stack.Screen name='Latest News' component={AgricultureNews} options={{headerShown:false}}/>
        <Stack.Screen name='Rate List' component={RateListWebScrapping} options={{headerShown:false}}/>
        <Stack.Screen name='Soil Test Booking' component={SoilTesting} options={{headerShown:true}}/>
        <Stack.Screen name='Product Details' component={ProductDetailsScreens} options={{headerShown:true}}/>
        <Stack.Screen name='Buy Now' component={BuyNow} options={{headerShown:true}}/> */}

    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})