import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppColor from '../../constant/AppColor';
import ImagePath from '../../constant/ImagePath';
import {responsive} from '../../constant/Responsive';
import CustomSwipeButton from '../../componets/CustomSwipeButton';
import {useDispatch, useSelector} from 'react-redux';
import translations from '../../constant/String';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeLanguage} from '../../redux/action/Action';
const Splash = () => {
  //   const navigation = useNavigation();
  const language = useSelector(state => state.language);
  const string = translations[language];
  const mode = useSelector(state => state.mode);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchLanguageFromAsyncStorage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('language');
        console.log(storedLanguage, 'Line 33');
        if (storedLanguage) {
          dispatch(changeLanguage(storedLanguage));
          setModalVisible(false);
        }
        if (storedLanguage == null) {
          setModalVisible(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLanguageFromAsyncStorage();
  }, []);

  const handleSwipeSuccess = () => {
    // navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual name of your next screen
    console.log('hii done');
  };

  const changeLanguageToEnglish = async () => {
    dispatch(changeLanguage('en'));
    setModalVisible(false);
    await AsyncStorage.setItem('language', 'en');
  };

  const changeLanguageToHindi = async () => {
    dispatch(changeLanguage('hi'));
    setModalVisible(false);
    await AsyncStorage.setItem('language', 'hi');
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
        <CustomSwipeButton
          title={string.welcomeFarmer}
          onSwipeSuccess={handleSwipeSuccess}
        />
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modelContainer}>
          <Text style={styles.modelText}>Select the Language !</Text>
          <TouchableOpacity
            style={styles.buttonHolder}
            onPress={changeLanguageToEnglish}>
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHolder}
            onPress={changeLanguageToHindi}>
            <Text style={styles.buttonText}>हिंदी</Text>
          </TouchableOpacity>
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
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
  modelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    padding: responsive(20),
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    gap: responsive(20),
  },
  modelText: {
    color: AppColor.black,
    fontSize: responsive(22),
    fontFamily: 'OpenSans-Medium',
  },
  buttonText: {
    color: AppColor.white,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
  },
  buttonHolder: {
    borderWidth: 2,
    width: '80%',
    alignItems: 'center',
    padding: responsive(10),
    alignSelf: 'center',
    borderRadius: responsive(10),
    borderColor: AppColor.primary,
    backgroundColor: AppColor.primary,
  },
});
