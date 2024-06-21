import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsive } from '../../constant/Responsive'
import AppColor from '../../constant/AppColor'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InsuranceStep = () => {
  return (
    <View style={styles.insuranceStep}>
        <Text style={styles.headerText}>Steps to get Insurance:</Text>
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
          </View>
          <View style={{gap:responsive(15),marginTop:responsive(5),width:'90%'}}>
            <View>
            <Text style={styles.insuranceHeaderText}>Step 1:</Text>
            <Text style={styles.insuranceSubHeaderText}>Purchase Aggrobuddy input with Insurance</Text>
            </View>
            <View>
            <Text style={styles.insuranceHeaderText}>Step 2:</Text>
            <Text style={styles.insuranceSubHeaderText}>complete KYC (Id card Proof)</Text>
            </View>
            <View>
            <Text style={styles.insuranceHeaderText}>Step 3:</Text>
            <Text style={styles.insuranceSubHeaderText}>Complete KYC (Add Bank Details)</Text>
            </View>
           
          </View>
        </View>
      </View>
  )
}

export default InsuranceStep

const styles = StyleSheet.create({
    insuranceStep: {
        width: '95%',
        alignSelf: 'center',
        marginBottom: responsive(10),
        padding: responsive(10),
      },
      contentHolder: {
        marginVertical: responsive(10),
        flexDirection: 'row',
        gap: responsive(10),
        padding: responsive(10),
      },
      iconHolder: {
        width:'20%',
        alignItems:'center'
      },
      icon: {
        transform: [{rotate: '180deg'}],
      },
      insuranceHeaderText: {
        fontSize: responsive(20),
        fontFamily: 'OpenSans-Medium',
        color: AppColor.dark_Green,
      },
      insuranceSubHeaderText: {
        fontSize: responsive(16),
        fontFamily: 'OpenSans-Medium',
        color: AppColor.primary,
        width:'90%'
      },
      headerText: {
        fontSize: responsive(19),
        color: AppColor.primary,
        fontFamily: 'OpenSans-Bold',
      },
})