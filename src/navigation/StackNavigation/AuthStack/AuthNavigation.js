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

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name ='OTP' component={OTP} options={{headerShown:false}}/>
        <Stack.Screen name ='New Account' component={NewRegistration} options={{headerShown:false}}/>
        <Stack.Screen name ='BottomTab' component={BottomNavigation} options={{headerShown:false}}/>
        <Stack.Screen name ='Product Category' component={ProductCategory} options={{headerShown:false}}/>
        <Stack.Screen name='Add Product' component={AddNewPost} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})