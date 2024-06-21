import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const InsuranceClaimProcess = () => {
  return (
    <View style={styles.insuranceStep}>
      <Text style={styles.headerText}>How insurance claim works:</Text>
      <View style={styles.contentHolder}>
        <View style={styles.iconHolder}>
           <Ionicons
              name="checkmark-done-circle-sharp"
              color={AppColor.dark_Green}
              size={responsive(40)}
            />
            <MaterialIcons
              name="straight"
              color={AppColor.dark_Green}
              size={responsive(40)}
              style={styles.icon}
            />
            <Ionicons
              name="checkmark-done-circle-sharp"
              color={AppColor.dark_Green}
              size={responsive(40)}
            />
            <MaterialIcons
              name="straight"
              color={AppColor.dark_Green}
              size={responsive(40)}
              style={styles.icon}
            />
            <Ionicons
              name="checkmark-done-circle-sharp"
              color={AppColor.dark_Green}
              size={responsive(40)}
            />
            <MaterialIcons
              name="straight"
              color={AppColor.dark_Green}
              size={responsive(40)}
              style={styles.icon}
            />
            <Ionicons
              name="checkmark-done-circle-sharp"
              color={AppColor.dark_Green}
              size={responsive(40)}
            /> 
        </View>
        <View
          style={{gap: responsive(15), marginTop: responsive(5), width: '90%'}}>
          <View style={styles.textHolder}>
            <Text style={styles.insuranceHeaderText}>
              As per insurance policy, claim will be decided on the basis of
              satellite data of weather.
            </Text>
          </View>
          <View style={styles.textHolder}>
            <Text style={styles.insuranceHeaderText}>
              When farmer is eligible for claim, then farmer is notified via
              SMS, Whatsapp and app notification.{' '}
            </Text>
          </View>
          <View style={styles.textHolder}>
            <Text style={styles.insuranceHeaderText}>
              Farmer must complete their KYC in order to claim the insurance
              amount.
            </Text>
          </View>
          <View style={styles.textHolder}>
          <Text style={styles.insuranceHeaderText}>
              Insurance amount will be sent to farmer's bank account.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InsuranceClaimProcess;

const styles = StyleSheet.create({
  insuranceStep: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: responsive(10),
    padding: responsive(10),
  },
  headerText: {
    fontSize: responsive(19),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Bold',
  },
  contentHolder: {
    marginVertical: responsive(10),
    flexDirection: 'row',
    gap: responsive(10),
    padding: responsive(10),
  },
  iconHolder: {
    width: '20%',
    alignItems: 'center',
    gap:responsive(12)
  },
  insuranceHeaderText: {
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
  },
  textHolder:{
    width:'85%',
backgroundColor:AppColor.dim_Grey,
borderRadius:responsive(10),
padding:responsive(10)
  },
  
  icon: {
    transform: [{rotate: '180deg'}],
  },
});
