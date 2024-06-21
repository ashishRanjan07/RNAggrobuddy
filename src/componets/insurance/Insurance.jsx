import {
    Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import CustomButton from '../CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InsuranceBenefitsCard from './InsuranceBenefitsCard';
import ImagePath from '../../constant/ImagePath';
import InsuranceStep from './InsuranceStep';
import InsuranceClaimProcess from './InsuranceClaimProcess';
const Insurance = () => {
    const [showNeedHelp,setShowNeedHelp] = useState(false);
    if(showNeedHelp){
        Alert.alert("Need Help","Call on 6206416452")
    }
  return (
    <>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Weather based Crop Insurance</Text>
          <Text style={styles.subHeaderText}>
            Protect your crop from unknown weather perils
          </Text>
          <View style={styles.buttonHolder}>
            <CustomButton
              title={'Buy Insurance Now'}
              color={AppColor.dark_Green}
              handleAction={() =>
                console.log('CLicked on the Buy now Insurance Button')
              }
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewHolder}
          onPress={() => console.log('Navigate to KYC DETAILS Page')}>
          <View style={styles.innerView}>
            <AntDesign
              name="idcard"
              size={responsive(30)}
              color={AppColor.dark_Green}
            />
            <View>
              <Text style={styles.text}>KYC</Text>
              <Text style={styles.subHeaderText}>
                Identity Card, bank account no, etc,
              </Text>
            </View>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={responsive(30)}
            color={AppColor.dark_Green}
          />
        </TouchableOpacity>
        {/* Benefits */}
        <View style={styles.benefitsHolder}>
          <Text style={styles.headerText}>Benefits:</Text>
          <View style={styles.serviceHolder}>
            <InsuranceBenefitsCard
              title={'Helps prevent financial Loss'}
              image={ImagePath.coin}
            />
            <InsuranceBenefitsCard
              title={'Minimum PaperWork'}
              image={ImagePath.min}
            />
            <InsuranceBenefitsCard
              title={'Application by Simple Registration'}
              image={ImagePath.asr}
            />
            <InsuranceBenefitsCard
              title={'Daily Satellite Weather Monitoring'}
              image={ImagePath.satelite}
            />
            <InsuranceBenefitsCard
              title={'Digital Claim Calculation'}
              image={ImagePath.digital}
            />
            <InsuranceBenefitsCard
              title={'No need to report Damage'}
              image={ImagePath.damage}
            />
          </View>
        </View>
        {/* Step of Get Insurance  */}
        <InsuranceStep />
        {/* How claim process will work */}
        <InsuranceClaimProcess />
        {/* Need Help Floating Button */}
      </ScrollView>
      <TouchableOpacity style={styles.needHelpButton} onPress={()=> setShowNeedHelp(!showNeedHelp)}>
        <Text style={styles.helpText}>Need Help ?</Text>
      </TouchableOpacity>
    </>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  header: {
    width: '95%',
    alignSelf: 'center',
    marginTop: responsive(10),
    padding: responsive(10),
    gap: responsive(5),
  },
  headerText: {
    fontSize: responsive(19),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Bold',
  },
  subHeaderText: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  buttonHolder: {
    width: '50%',
  },
  viewHolder: {
    marginVertical: responsive(10),
    borderWidth: 2,
    width: '95%',
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsive(10),
    elevation: responsive(10),
    borderColor: AppColor.warning,
    alignItems: 'center',
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(20),
    width: '70%',
  },
  text: {
    fontSize: responsive(22),
    color: AppColor.warning,
    fontFamily: 'OpenSans-ExtraBold',
  },
  benefitsHolder: {
    width: '95%',
    padding: responsive(10),
    alignSelf: 'center',
    marginVertical: responsive(10),
  },
  serviceHolder: {
    marginVertical: responsive(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: responsive(15),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  needHelpButton: {
    backgroundColor: AppColor.warning,
    width: responsive(150),
    padding: responsive(10),
    borderRadius: responsive(5),
    alignItems: 'center',
    elevation: responsive(20),
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  helpText: {
    fontSize: responsive(20),
    color: AppColor.white,
    fontFamily: 'OpenSans-Medium',
  },
});
