import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppColor from '../../constant/AppColor';
import ImagePath from '../../constant/ImagePath';
import {responsive} from '../../constant/Responsive';
import CustomSwipeButton from '../../componets/CustomSwipeButton';
import { useSelector } from 'react-redux';
import translations from '../../constant/String';
const Splash = () => {
  //   const navigation = useNavigation();
  const language = useSelector(state => state.language);
  const string = translations[language];

  const handleSwipeSuccess = () => {
    // navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual name of your next screen
    console.log('hii done');
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeArea} />
      <StatusBar backgroundColor={AppColor.primary} barStyle={'dark-content'} />
      <View style={styles.textHolder}>
        <Text style={styles.text}>{string.welcome}</Text>
      </View>
      <Image
        source={ImagePath.splash}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <View style={styles.lowerTextHolder}>
        <View style={styles.viewHolder}>
          <Image
            source={ImagePath.farmer}
            resizeMode="contain"
            style={styles.smallerImage}
          />
          <Text style={styles.secondaryText}>{string.farmer}</Text>
        </View>
        <View style={styles.viewHolder}>
          <Image
            source={ImagePath.worker}
            resizeMode="contain"
            style={styles.smallerImage}
          />
          <Text style={styles.secondaryText}>{string.worker}</Text>
        </View>
        <View style={styles.viewHolder}>
          <Image
            source={ImagePath.merchant}
            resizeMode="contain"
            style={styles.smallerImage}
          />
          <Text style={styles.secondaryText}>{string.merchant}</Text>
        </View>
      </View>
      <View style={styles.swipeButtonContainer}>
        <CustomSwipeButton title={string.welcomeFarmer} onSwipeSuccess={handleSwipeSuccess} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  safeArea: {
    backgroundColor: AppColor.primary,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  textHolder: {
    width: '100%',
    position: 'absolute',
    top: responsive(150),
  },
  lowerTextHolder: {
    position: 'absolute',
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    bottom: responsive(150),
    gap: responsive(5),
  },
  text: {
    width: '80%',
    fontSize: responsive(24),
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: responsive(40),
    color: AppColor.white,
    fontFamily: 'OpenSans-Bold',
  },
  smallerImage: {
    height: responsive(30),
    width: responsive(30),
  },
  viewHolder: {
    flexDirection: 'row',
    gap: responsive(5),
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: responsive(18),
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: responsive(40),
    color: AppColor.white,
    fontFamily: 'OpenSans-Bold',
  },
  swipeButtonContainer: {
    position: 'absolute',
    bottom: responsive(35),
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: responsive(30),
    padding: responsive(10),
    borderColor: AppColor.dark_Yellow,
    backgroundColor: AppColor.dark_Yellow,
    overflow: 'hidden',
  },
});
