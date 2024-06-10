import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductCategory from '../../../componets/learn/ProductCategory';


const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Product Category' component={ProductCategory} />
  </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})