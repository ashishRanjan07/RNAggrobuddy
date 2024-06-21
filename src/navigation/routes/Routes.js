import React, {useEffect, useState} from 'react';
import AuthNavigation from '../StackNavigation/AuthStack/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import AppStack from '../StackNavigation/AppStack/AppStack';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const isLoggedInRedux = useSelector(state => state.isLoggedIn);
  const isSaveData = useSelector(state => state.saveData);
  console.log(isLoggedInRedux,"Line 13")
  useEffect(() => {
    const fetchLoggedInData = async () => {
      const response2 = await AsyncStorage.getItem('isOTPVerified');
      setIsLoggedIn(response2);
      console.log(response2,"Line 18")
    };
    fetchLoggedInData();
  }, [isSaveData,isLoggedIn, isLoggedInRedux]);
  return (
    <>{isLoggedIn === null ? <AuthNavigation /> : <AppStack />}</>
  );
};

export default Routes;

