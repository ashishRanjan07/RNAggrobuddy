import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../../screens/AuthScreens/Splash';
import Login from '../../../screens/AuthScreens/login/Login';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})