import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const KYC = () => {
  const [idVerificationStatus,setIdVerificationStatus] = useState('Pending');
  const [bankVerificationStatus,setBankVerificationStatus] = useState('Pending');
  const navigation = useNavigation();
  const handleIdentityProofVerification = async() => {
    console.log("Identity Proof Verification");
    navigation.navigate('Add ID Proof',{idVerificationStatus})
  }
  const handleBankVerification = async() => {
    console.log("Bank Account Verification Clicked")
    navigation.navigate('Bank verification',{bankVerificationStatus})
  }
  return (
    <ScrollView style={styles.main}>
      <View style={styles.viewHolder}>
        <Text style={styles.text}>
          Please Complete your your KYC in order to claim insurance and get
          other financial benefits
        </Text>
        <TouchableOpacity style={styles.boxHolder} onPress={handleIdentityProofVerification}>
          <View style={styles.innerView}>
            <AntDesign
              name="idcard"
              size={responsive(30)}
              color={AppColor.dark_Green}
            />
            <View>
              <Text style={styles.BoxText}>Identity Proof Verification</Text>
              <Text style={styles.subHeaderText}>{idVerificationStatus}</Text>
            </View>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={responsive(30)}
            color={AppColor.dark_Green}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxHolder} onPress={handleBankVerification}>
          <View style={styles.innerView}>
            <AntDesign
              name="bank"
              size={responsive(30)}
              color={AppColor.dark_Green}
            />
            <View>
              <Text style={styles.BoxText}>Bank Verification</Text>
              <Text style={styles.subHeaderText}>{bankVerificationStatus}</Text>
            </View>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={responsive(30)}
            color={AppColor.dark_Green}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default KYC;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  viewHolder: {
    width: '95%',
    alignSelf: 'center',
    padding: responsive(10),
  },
  text: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Bold',
  },
  boxHolder: {
    marginTop: responsive(20),
    borderWidth: 2,
    width: '100%',
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsive(10),
    elevation: responsive(10),
    borderColor: AppColor.dark_Yellow,
    alignItems: 'center',
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(20),
    width: '70%',
  },
  BoxText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'OpenSans-ExtraBold',
  },
  subHeaderText: {
    marginVertical: responsive(5),
    fontSize: responsive(18),
    color: AppColor.black,
    backgroundColor: AppColor.dark_Yellow,
    padding: responsive(5),
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
    borderRadius: responsive(10),
    width:responsive(150)
  },
});
