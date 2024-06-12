import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddNewAddress from './AddNewAddress';
import ListOfSaveAddress from './ListOfSaveAddress';

const Tab = createMaterialTopTabNavigator();
const Address = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add New Address" component={AddNewAddress} />
      <Tab.Screen name="Saved Address" component={ListOfSaveAddress} />
    </Tab.Navigator>
  );
};

export default Address;

const styles = StyleSheet.create({});
