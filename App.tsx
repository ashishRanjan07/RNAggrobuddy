import { StyleSheet, Text, View,AppState } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/navigation/routes/Routes';
import { BlurView } from '@react-native-community/blur';


const App = () => {

  const [appState, setAppState] = useState(AppState.currentState);


  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);


    return () => {
      subscription.remove();
    };
  }, []);


  const handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      // App has come to the foreground
    } else if (nextAppState.match(/inactive|background/)) {
      // App has gone to the background
    }
    setAppState(nextAppState);
  };


  return (
   <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaProvider>
    {(appState === 'inactive' || appState === 'background') && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
        />
      )}
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#ffffff',
    flex:1
  },
  text:{
    fontSize:18,
    fontFamily:'OpenSans-Italic',
    color:'#000000'
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

})