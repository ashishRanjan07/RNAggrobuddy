import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppColor from '../../../constant/AppColor';
import ImagePath from '../../../constant/ImagePath';
import {responsive} from '../../../constant/Responsive';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../../componets/CustomButton';
import LottieView from 'lottie-react-native';
import { useSelector} from 'react-redux';
import translations from '../../../constant/String';
const Login = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [waringText, setWaringText] = useState('');
  const language = useSelector(state => state.language);
  const string = translations[language];

  useEffect(() => {
    if (userId.length > 0) {
      setWaringText('');
    }
  }, [userId]);

  const handleLogin = async () => {
    if (userId.trim() === '') {
      setWaringText('Please enter the valid User Id');
      return;
    }
    try {
      if (userId === 'aviashishranjan@gmail.com') {
        // dispatch(login('Yes'));
        // await AsyncStorage.setItem('isUserId', 'Yes');
        navigation.navigate('OTP');
      } else {
        setWaringText('Invalid Credentials');
      }
    } catch (error) {}
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeAreaView} />
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.primary} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.imageHolder}>
          <Image
            source={ImagePath.splash}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <Text style={styles.text}>{string.welcomeFarmer}</Text>
          <Text style={styles.text}>{string.login}</Text>
          <View style={styles.inputHolder}>
            <Text style={styles.label}>{string.userId}</Text>
            <View style={styles.inputBox}>
              <Feather
                name="user"
                size={responsive(30)}
                color={AppColor.primary}
              />
              <TextInput
                style={styles.textInputBox}
                placeholder={string.userId}
                value={userId}
                placeholderTextColor={AppColor.primary}
                onChangeText={text => setUserId(text)}
              />
              {userId.length > 0 && (
                <TouchableOpacity onPress={() => setUserId('')}>
                  <Ionicons
                    name="close-circle-outline"
                    size={responsive(30)}
                    color={AppColor.primary}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {waringText && <Text style={styles.waringText}>{waringText}</Text>}

          {/* Button */}
          <View style={{width: '90%', alignSelf: 'center'}}>
            <CustomButton
              title={string.loginButton}
              handleAction={handleLogin}
              color={AppColor.white}
            />
          </View>
          {/* Create Account */}
          <TouchableOpacity
            onPress={() => navigation.navigate('New Account')}
            style={[
              styles.inputHolder,
              {
                marginVertical: responsive(10),
                padding: responsive(0),
                overflow: 'hidden',
                backgroundColor: AppColor.light_Green,
              },
            ]}>
            <View style={styles.createAccount}>
              <Text style={styles.createAccountText}>{string.newAccount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.lottifileHolder}>
        <LottieView
          resizeMode="cover"
          style={styles.icon}
          source={require('../../../assets/animation/crop.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  scroll: {
    flex: 1,
    zIndex: 1,
  },
  safeAreaView: {
    backgroundColor: AppColor.primary,
  },
  imageStyle: {
    height: responsive(200),
    width: responsive(275),
    alignSelf: 'center',
  },
  imageHolder: {
    width: '95%',
    marginTop: responsive(150),
    alignSelf: 'center',
    gap: responsive(15),
    justifyContent: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: responsive(22),
    color: AppColor.white,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  inputHolder: {
    width: '90%',
    padding: responsive(10),
    borderRadius: responsive(10),
    alignSelf: 'center',
    gap: responsive(10),
    backgroundColor: AppColor.white,
  },
  label: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
  textInputBox: {
    width: '75%',
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(10),
  },
  createAccount: {
    padding: responsive(10),
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: responsive(20),
    color: AppColor.light_Yellow,
    fontFamily: 'OpenSans-Medium',
  },
  lottifileHolder: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    zIndex: 0,
  },
  icon: {
    width: responsive(200),
    height: responsive(400),
  },
  waringText: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.warning,
    textAlign: 'center',
  },
});
