import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/navigation/routes/Routes';
const App = () => {
  return (
   <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaProvider>
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
  }
})