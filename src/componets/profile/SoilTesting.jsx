import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../constant/AppColor';
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';

const SoilTesting = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.main}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      )}
      <WebView
        source={{
          uri: 'https://www.soilhealth.dac.gov.in/home',
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={isLoading ? {display: 'none'} : {flex: 1}}
      />
    </View>
  );
};

export default SoilTesting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.white,
},
});
