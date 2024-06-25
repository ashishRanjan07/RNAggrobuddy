import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../CustomButton';
const EditAddressForm = ({route}) => {
  const {item} = route.params;
  const [name, setName] = useState(item?.Name ? item?.Name : '');
  const [phoneNo, setPhoneNo] = useState(item?.PhoneNo ? item?.PhoneNo : '');
  const [pinCode, setPinCode] = useState(item?.Pincode ? item?.Pincode : '');
  const [city, setCity] = useState(item?.City ? item?.City : '');
  const [stateName, setStateName] = useState(item?.State ? item?.State : '');
  const [house, setHouse] = useState(item?.HouseNo ? item?.HouseNo : '');
  const [roadName, setRoadName] = useState(
    item?.RoadName ? item?.RoadName : '',
  );
  const [typeOfAddress, setTypeOfAddress] = useState(
    item?.TypeOfAddress ? item?.TypeOfAddress : '',
  );
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [pinCodeError, setPinCodeError] = useState('');
  const [stateError, setStateError] = useState('');
  const [cityError, setCityError] = useState('');
  const [houseError, setHouseError] = useState('');
  const [roadError, setRoadError] = useState('');

  useEffect(() => {
    if (name.length > 0) {
      setNameError('');
    }
    if (phoneNo.length > 0) {
      setPhoneError('');
    }
    if (pinCode.length > 0) {
      setPinCodeError('');
    }
    if (stateName.length > 0) {
      setStateError('');
    }
    if (city.length > 0) {
      setCityError('');
    }
    if (house.length > 0) {
      setHouseError('');
    }
    if (roadName.length > 0) {
      setRoadError('');
    }
  }, [name, phoneNo, pinCode, stateName, city, house, roadName]);
  const saveAddress = () => {
    if (name.trim() === '') {
      setNameError('Enter Name');
      return;
    }
    if (phoneNo.trim() === '') {
      setPhoneError('Enter Phone No');
      return;
    }
    if (pinCode.trim() === '') {
      setPinCodeError('Enter pinCode');
      return;
    }
    if (stateName.trim() === '') {
      setStateError('Enter State Name');
      return;
    }
    if (city.trim() === '') {
      setCityError('Enter City Name');
      return;
    }
    if (house.trim() === '') {
      setHouseError('Enter House No and Other Details');
      return;
    }
    if (roadName.trim() === '') {
      setRoadError('Enter nearby or landmark Name');
      return;
    }
    // console.log(
    //   name,
    //   phoneNo,
    //   pinCode,
    //   stateName,
    //   city,
    //   house,
    //   roadName,
    //   typeOfAddress,
    //   'Line 26',
    // );
  };
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <TextInput
        placeholder="Enter Name (Required)*"
        placeholderTextColor={AppColor.primary}
        value={name}
        onChangeText={text => setName(text)}
        keyboardType="default"
        style={styles.inputBox}
      />
      {nameError && <Text style={styles.errorText}>{nameError}</Text>}
      <TextInput
        placeholder="Enter Phone Number (Required)*"
        placeholderTextColor={AppColor.primary}
        value={phoneNo}
        onChangeText={text => setPhoneNo(text)}
        keyboardType="default"
        style={styles.inputBox}
      />
      {phoneError && <Text style={styles.errorText}>{phoneError}</Text>}
      <TextInput
        placeholder="Pincode (Required)*"
        placeholderTextColor={AppColor.primary}
        value={pinCode}
        onChangeText={text => setPinCode(text)}
        keyboardType="number-pad"
        style={styles.inputBox}
      />
      {pinCodeError && <Text style={styles.errorText}>{pinCodeError}</Text>}
      <TextInput
        placeholder="State Name (Required)*"
        placeholderTextColor={AppColor.primary}
        value={stateName}
        onChangeText={text => setStateName(text)}
        keyboardType="default"
        style={styles.inputBox}
      />
      {stateError && <Text style={styles.errorText}>{stateError}</Text>}
      <TextInput
        placeholder="City Name (Required)*"
        placeholderTextColor={AppColor.primary}
        value={city}
        onChangeText={text => setCity(text)}
        keyboardType="default"
        style={styles.inputBox}
      />
      {cityError && <Text style={styles.errorText}>{cityError}</Text>}
      <TextInput
        placeholder="House No, Building Name(Required)*"
        placeholderTextColor={AppColor.primary}
        value={house}
        onChangeText={text => setHouse(text)}
        keyboardType="default"
        style={styles.inputBox}
        multiline={true}
      />
      {houseError && <Text style={styles.errorText}>{houseError}</Text>}
      <TextInput
        placeholder="Road Name (Required)*"
        placeholderTextColor={AppColor.primary}
        value={roadName}
        onChangeText={text => setRoadName(text)}
        keyboardType="default"
        style={styles.inputBox}
        multiline={true}
      />
      {roadError && <Text style={styles.errorText}>{roadError}</Text>}
      {/* Type of Address */}
      <View style={styles.addressHolder}>
        <Text style={styles.text}>Type of Address</Text>
        <View style={styles.itemHolder}>
          <TouchableOpacity
            style={[
              styles.itemHolder2,
              {
                backgroundColor:
                  typeOfAddress === 'Home'
                    ? AppColor.dark_Green
                    : AppColor.white,
                borderColor:
                  typeOfAddress === 'Home'
                    ? AppColor.dark_Green
                    : AppColor.white,
              },
            ]}
            onPress={() => {
              setTypeOfAddress('');
              setTypeOfAddress('Home');
            }}>
            <AntDesign
              name="home"
              size={responsive(30)}
              color={AppColor.primary}
            />
            <Text style={styles.text2}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.itemHolder2,
              {
                backgroundColor:
                  typeOfAddress === 'Work'
                    ? AppColor.dark_Green
                    : AppColor.white,
                borderColor:
                  typeOfAddress === 'Work'
                    ? AppColor.dark_Green
                    : AppColor.white,
              },
            ]}
            onPress={() => {
              setTypeOfAddress('');
              setTypeOfAddress('Work');
            }}>
            <MaterialCommunityIcons
              name="office-building-outline"
              size={responsive(30)}
              color={AppColor.primary}
            />
            <Text style={styles.text2}>Work</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonHolder}>
        <CustomButton
          title={'Save Address'}
          color={AppColor.primary}
          handleAction={saveAddress}
        />
      </View>
    </ScrollView>
  );
};

export default EditAddressForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: AppColor.primary,
    width: '95%',
    fontSize: responsive(18),
    color: AppColor.light_Green,
    fontFamily: 'OpenSans-Medium',
    padding: responsive(10),
    borderRadius: responsive(5),
    marginVertical: responsive(15),
    alignSelf: 'center',
    backgroundColor: AppColor.white,
  },
  text: {
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(18),
    textAlign: 'center',
  },
  addressHolder: {
    width: '95%',
    alignSelf: 'center',
    gap: responsive(20),
  },
  itemHolder: {
    flexDirection: 'row',
    gap: responsive(10),
    alignItems: 'center',
    borderRadius: responsive(15),
    padding: responsive(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  itemHolder2: {
    flexDirection: 'row',
    gap: responsive(10),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColor.primary,
    borderRadius: responsive(15),
    padding: responsive(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text2: {
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
  },
  buttonHolder: {
    width: '95%',
    alignSelf: 'center',
  },
  errorText: {
    fontSize: responsive(18),
    color: AppColor.warning, // Customize this color as needed
    marginHorizontal: responsive(20),
  },
});
