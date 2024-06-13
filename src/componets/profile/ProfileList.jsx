import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomAlert from '../CustomAlert';
import {useNavigation} from '@react-navigation/native';
import AccountDeletionModal from '../AccountDeletionModal';
import TermsAndConditionModal from '../TermsAndConditionModal';
import LanguageModal from '../LanguageModal';
import { useDispatch, useSelector } from 'react-redux';
import translations from '../../constant/String';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeLanguage } from '../../redux/action/Action';
const ProfileList = () => {
  const navigation = useNavigation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [deletionModalVisible, setDeletionModalVisible] = useState(false);
  const [TermAndConditionVisible, setTermAndConditionVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const string = translations[language];
  const showDeletionModal = () => {
    setDeletionModalVisible(true);
  };

  const showTermsAndConditionModal = () => {
    setTermAndConditionVisible(true);
  };

  const hideTermAndConditionModal = () => {
    setTermAndConditionVisible(false);
  };
  const hideDeletionModal = () => {
    setDeletionModalVisible(false);
  };

  const handleAcceptTermAndCondition = () => {
    hideTermAndConditionModal();
  };
  const handleAccountDeletionConfirm = () => {
    hideDeletionModal();
  };
  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };
  const handleLogout = () => {
    navigation.push('Splash');
  };
  const changeLanguageToEnglish =async () => {
    // console.log('English');
    dispatch(changeLanguage('en'));
    setLanguageModalVisible(false);
    await AsyncStorage.setItem('language', 'en');
  };
  const changeLanguageToHindi = async() => {
    // console.log('Hindi');
    dispatch(changeLanguage('hi'));
    setLanguageModalVisible(false);
    await AsyncStorage.setItem('language', 'hi');
  };
  const hideLanguageAlert = () => {
    setLanguageModalVisible(false);
  };
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Order and Booking */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Order and Booking</Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Feather
                name="shopping-bag"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Orders</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Fontisto
                name="blood-test"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Soil Test Booking</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* Weather and Expert Suggestions */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Weather and Expert Suggestion</Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Weather Alert</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="connect-without-contact"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Connect With Expert</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* Earn and Support Suggestions */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Earn and Support</Text>
          </View>
          <TouchableOpacity style={styles.listHolder} onPress={()=> navigation.navigate('Refer And Earn')}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="share-outline"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Refer and Earn</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="logo-whatsapp"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Chat on Whatsapp</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* News and Rate List */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>
              Latest Mandi News and Rate List
            </Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="newspaper-outline"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Latest News</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="list"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Rate List</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* Accounts */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Accounts</Text>
          </View>
          <TouchableOpacity
            style={styles.listHolder}
            onPress={() => setLanguageModalVisible(true)}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="language"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Change Language</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Change Mode</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listHolder}
            onPress={() => navigation.push('Save and Add Address')}>
            <View style={styles.iconHolder}>
              <Entypo
                name="address"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Saved Address</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listHolder}
            onPress={showTermsAndConditionModal}>
            <View style={styles.iconHolder}>
              <Octicons
                name="code-of-conduct"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Terms and Conditions</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listHolder}
            onPress={() => navigation.navigate('Privacy Policy')}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="privacy-tip"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Privacy Policy</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listHolder}
            onPress={showDeletionModal}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="folder-delete"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Account Deletion Request</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder} onPress={showAlert}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="logout"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Logout</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomAlert
        visible={alertVisible}
        title="Confirm ?"
        message="are you sure you want to logout ?"
        onClose={hideAlert}
        onConfirm={handleLogout}
      />
      <AccountDeletionModal
        visible={deletionModalVisible}
        onClose={hideDeletionModal}
        onConfirm={handleAccountDeletionConfirm}
      />
      <TermsAndConditionModal
        visible={TermAndConditionVisible}
        onClose={hideTermAndConditionModal}
        onConfirm={handleAcceptTermAndCondition}
      />
      <LanguageModal
        visible={languageModalVisible}
        title={'Change Language'}
        onClose={hideLanguageAlert}
        buttonOne={'English'}
        buttonOneAction={changeLanguageToEnglish}
        buttonTwo={'Hindi'}
        buttonTwoAction={changeLanguageToHindi}
      />
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: responsive(5),
    backgroundColor: AppColor.primary,
  },
  scroll: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
  },
  contentHolder: {
    borderWidth: 2,
    borderColor: AppColor.white,
    borderRadius: responsive(10),
    elevation: responsive(10),
    paddingVertical: responsive(10),
    backgroundColor: AppColor.white,
    marginVertical: responsive(10),
  },
  headerHolder: {
    borderLeftWidth: 4,
    borderColor: AppColor.light_Green,
    padding: responsive(5),
    marginLeft: -responsive(2),
  },
  headerText: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Bold',
    marginLeft: responsive(15),
  },
  listHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
    alignItems: 'center',
    gap: 10,
  },
  iconHolder: {
    width: '90%',
    borderWidth: 1,
    borderRadius: responsive(10),
    padding: responsive(10),
    marginVertical: responsive(10),
    flexDirection: 'row',
    gap: responsive(20),
  },
  listText: {
    fontSize: responsive(20),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
});
