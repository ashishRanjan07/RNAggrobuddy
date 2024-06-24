import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import ImagePath from '../../constant/ImagePath';
import CustomButton from '../CustomButton';
import {launchCamera} from 'react-native-image-picker';
const BankVerification = ({route}) => {
  const navigation = useNavigation();
  const {bankVerificationStatus} = route.params;
  console.log(bankVerificationStatus, 'Line 8');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIFSCCode] = useState('');
  const [passbookImage, setPassbookImage] = useState('');
  const HandleSubmit = async () => {
    console.log('Submit Button Clicked');
    navigation.goBack();
  };
  const removeImage = async () => {
    setPassbookImage('');
  };
  const handleImageSelection = async => {
    console.log('Image Upload Clicked ');
    cameraOpen();
  };
  const cameraOpen = async () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
        cameraType: 'front',
        saveToPhotos: true,
        quality: 0.7,
      };
      launchCamera(options, async response => {
        if (response.didCancel) {
          console.log('User cancel Camera');
        } else if (response.error) {
          console.log('Camera Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          setPassbookImage(imageUri);
        }
      });
    } catch (error) {
      console.log('Error in Opening camera', error.message);
    }
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.contentHolder}>
        {/*Information View */}
        <View style={styles.infoTab}>
          <View style={styles.textHolder}>
            <Text style={styles.text}>
              Bank Account should belong to the same person.
            </Text>
          </View>
          <MaterialIcons
            name="lightbulb-circle"
            size={responsive(40)}
            color={AppColor.light_Yellow}
          />
        </View>
        {/* Form Fill Up */}
        <View style={styles.formHolder}>
          <Text style={styles.formHeaderText}>
            Please fill out details to complete bank verification.
          </Text>
          <View style={styles.inputHolder}>
            <Text style={styles.labelText}>Account Number *</Text>
            <TextInput
              placeholder={'Account Number *'}
              value={accountNumber}
              keyboardType="number-pad"
              maxLength={18}
              placeholderTextColor={AppColor.primary}
              style={styles.textInputBox}
              onChangeText={text => setAccountNumber(text)}
            />
          </View>
          <View style={styles.inputHolder}>
            <Text style={styles.labelText}>Confirm Account Number *</Text>
            <TextInput
              placeholder={'Confirm Account Number *'}
              value={confirmAccountNumber}
              keyboardType="number-pad"
              maxLength={18}
              placeholderTextColor={AppColor.primary}
              style={styles.textInputBox}
              onChangeText={text => setConfirmAccountNumber(text)}
            />
          </View>
          <View style={styles.inputHolder}>
            <Text style={styles.labelText}>IFSC Code*</Text>
            <TextInput
              placeholder={'IFSC Code *'}
              value={ifscCode}
              autoCapitalize={'characters'}
              maxLength={11}
              placeholderTextColor={AppColor.primary}
              style={styles.textInputBox}
              onChangeText={text => setIFSCCode(text)}
            />
          </View>
          <Text style={styles.labelText}>Add Photo of Bank Passbook</Text>
          <View style={styles.docHolder}>
            {passbookImage ? (
              <View style={styles.imageHolderSection}>
                {passbookImage ? (
                  <Image
                    source={{uri: passbookImage}}
                    resizeMode="cover"
                    style={{width: '100%', height: responsive(200)}}
                  />
                ) : (
                  <Image
                    source={ImagePath.farmer}
                    resizeMode="cover"
                    style={{width: '100%', height: responsive(200)}}
                  />
                )}
                <TouchableOpacity
                  style={styles.removeImageIcon}
                  onPress={removeImage}>
                  <MaterialIcons
                    name="close"
                    size={responsive(25)}
                    color={AppColor.primary}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.imageHolderSection}
                onPress={handleImageSelection}>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: responsive(50),
                    gap: responsive(10),
                  }}>
                  <MaterialIcons
                    name="photo-camera"
                    size={responsive(35)}
                    color={AppColor.dark_Green}
                  />
                  <Text style={styles.cardUploadText}>
                    Upload photo of passbook
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {/* Button */}
      {passbookImage && (
        <View style={styles.buttonHolder}>
          <CustomButton
            title={'Submit'}
            handleAction={HandleSubmit}
            color={AppColor.dark_Green}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default BankVerification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  contentHolder: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    gap: responsive(15),
  },
  infoTab: {
    borderRadius: responsive(5),
    padding: responsive(15),
    backgroundColor: AppColor.light_Blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHolder: {
    width: '85%',
    opacity: 0.9,
  },
  text: {
    fontSize: responsive(13),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Regular',
  },
  formHolder: {
    padding: responsive(10),
    gap: responsive(10),
  },
  formHeaderText: {
    fontFamily: 'OpenSans-Bold',
    color: AppColor.primary,
    fontSize: responsive(18),
  },
  inputHolder: {
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    borderRadius: responsive(10),
    borderColor: AppColor.light_Blue,
    backgroundColor: AppColor.white,
    marginBottom: responsive(20),
  },
  labelText: {
    color: AppColor.primary,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
    margin: responsive(10),
  },
  textInputBox: {
    margin: responsive(10),
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    marginTop: 0,
  },
  docHolder: {
    borderWidth: 1,
    backgroundColor: AppColor.light_Grey,
    borderColor: AppColor.light_Grey,
    padding: responsive(15),
    borderRadius: responsive(10),
  },
  imageHolderSection: {
    borderWidth: 2,
    borderColor: AppColor.dark_Green,
    width: '100%',
    alignSelf: 'center',
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
  },
  cardUploadText: {
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Green,
    marginBottom: responsive(10),
  },
  imageIcon: {
    width: responsive(75),
    height: responsive(75),
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: responsive(20),
  },
  removeImageIcon: {
    position: 'absolute',
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.light_Grey,
    elevation: responsive(10),
    top: responsive(10),
    right: responsive(10),
  },
  buttonHolder: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
  },
});
