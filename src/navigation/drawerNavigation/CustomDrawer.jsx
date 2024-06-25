import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import translations from '../../constant/String';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppColor from '../../constant/AppColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsive} from '../../constant/Responsive';
import ImagePath from '../../constant/ImagePath';
import {DrawerItemList} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import {changeLanguage, login, saveData} from '../../redux/action/Action';
import LanguageModal from '../../componets/LanguageModal';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const string = translations[language];
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const changeLanguageToEnglish = async () => {
    dispatch(changeLanguage('en'));
    setLanguageModalVisible(false);
    await AsyncStorage.setItem('language', 'en');
    navigation.goBack();
  };

  const changeLanguageToHindi = async () => {
    dispatch(changeLanguage('hi'));
    setLanguageModalVisible(false);
    await AsyncStorage.setItem('language', 'hi');
    navigation.goBack();
  };

  const hideLanguageAlert = () => {
    setLanguageModalVisible(false);
    navigation.goBack();
  };

  const handleLogout = async () => {
    // console.log('logout clicked');
    commonFunction();
    // console.log('ji');
  };

  const commonFunction = async () => {
    await AsyncStorage.removeItem('isOTPVerified');
    dispatch(login('No'));
    dispatch(saveData('No'));
    dispatch(changeLanguage('en'));
    await AsyncStorage.removeItem('language');
  };

  return (
    <ScrollView style={styles.drawerContent}>
      <View style={styles.profileSection}>
        <Image
          source={ImagePath.farmer}
          style={styles.profileImage}
          resizeMode="center"
        />
      </View>
      <View style={styles.basicDetailsHolder}>
        <Text style={styles.text}>Ashish Ranjan</Text>
        <Text style={styles.text}>6206416452</Text>
        <Text style={styles.text}>aviashishranjan@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setLanguageModalVisible(true)}>
        <Entypo
          name="language"
          size={responsive(24)}
          color={AppColor.dark_Green}
        />
        <Text style={styles.logoutButtonText}>Change Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons
          name="logout"
          size={responsive(24)}
          color={AppColor.dark_Green}
        />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <LanguageModal
        visible={languageModalVisible}
        title={'Change Language'}
        onClose={hideLanguageAlert}
        buttonOne={'English'}
        buttonOneAction={changeLanguageToEnglish}
        buttonTwo={'Hindi'}
        buttonTwoAction={changeLanguageToHindi}
      />
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  profileSection: {
    marginTop: responsive(15),
    height: responsive(150),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: responsive(20),
    backgroundColor: AppColor.white,
    gap: 20,
  },
  profileImage: {
    width: responsive(150),
    height: responsive(150),
    borderRadius: responsive(75),
  },
  text: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Green,
    textAlign: 'justify',
  },
  basicDetailsHolder: {
    marginVertical: responsive(10),
    gap: responsive(5),
    width: '95%',
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    borderRadius: responsive(5),
    elevation: responsive(10),
    padding: responsive(5),
  },
  logoutButtonText: {
    fontSize: responsive(16),
    fontFamily: 'OpenSans-600',
    color: AppColor.dark_Green,
  },
  logoutButton: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: responsive(20),
  },
});
