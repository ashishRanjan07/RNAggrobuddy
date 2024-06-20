import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Splash from '../../screens/AuthScreens/Splash';
import AuthNavigation from '../StackNavigation/AuthStack/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import BottomNavigation from '../bottomNavigaton/BottomNavigation';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const isLoggedInRedux = useSelector(state => state.isLoggedIn);
  useEffect(() => {
    const fetchLoggedInData = async () => {
      const response2 = await AsyncStorage.getItem('isOTPVerified');
      setIsLoggedIn(response2);
    };
    fetchLoggedInData();
  }, [isLoggedIn, isLoggedInRedux]);
  return (
    <>{isLoggedIn === null ? <AuthNavigation /> : <BottomNavigation />}</>
  );
};

export default Routes;

const styles = StyleSheet.create({});
