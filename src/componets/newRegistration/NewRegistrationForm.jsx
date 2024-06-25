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
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../CustomButton';
import ImagePath from '../../constant/ImagePath';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import translations from '../../constant/String';
import {useNavigation} from '@react-navigation/native';
const NewRegistrationForm = () => {
  const navigation = useNavigation();
  const language = useSelector(state => state.language);
  const string = translations[language];
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [landmark, setLandmark] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const toggleGenderModal = () => {
    setShowGenderModal(!showGenderModal);
  };
  const handleModal = () => setShowImageModal(() => !showImageModal);
  const handleSubmit = async () => {
    // console.log(
    //   name,
    //   gender,
    //   mobile,
    //   email,
    //   address,
    //   pinCode,
    //   state,
    //   city,
    //   landmark,
    //   'Line 34',
    //   navigation.push('Login')
    // );
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
          // console.log('User cancel Camera');
        } else if (response.error) {
          // console.log('Camera Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          setShowImageModal(false);
          setProfileImage(imageUri);
        }
      });
    } catch (error) {
      // console.log('Error in Opening camera', error.message);
    }
  };

  // Gallery Opener
  const galleryOpen = async () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      launchImageLibrary(options, async response => {
        if (response.didCancel) {
          // console.log('User Cancel Image Picker');
        } else if (response.error) {
          // console.log('Image Picker Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          setShowImageModal(false);
          setProfileImage(imageUri);
        }
      });
    } catch (error) {
      // console.log('Error in Open Image Picker:', error.message);
    }
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={{marginVertical: responsive(10)}}
        onPress={() => setShowImageModal(true)}>
        {profileImage ? (
          <Image
            source={{uri: profileImage}}
            resizeMode="cover"
            style={styles.image}
          />
        ) : (
          <Image
            source={ImagePath.farmer}
            resizeMode="cover"
            style={styles.image}
          />
        )}
      </TouchableOpacity>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Name */}
        <View style={styles.inputHolder}>
          <Text style={styles.labelText}>{string.name}</Text>
          <TextInput
            placeholder={string.name}
            value={name}
            placeholderTextColor={AppColor.black}
            style={styles.textInputBox}
            onChangeText={text => setName(text)}
          />
        </View>
        {/* Gender */}
        <TouchableOpacity
          style={styles.inputHolder}
          onPress={() => setShowGenderModal(true)}>
          <Text style={styles.labelText}>{string.Select_Gender}</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder={string.Select_Gender}
              value={gender}
              placeholderTextColor={AppColor.black}
              style={[styles.textInputBox, {width: '85%'}]}
              editable={false}
              onChangeText={text => setGender(text)}
            />
            <AntDesign
              name="caretdown"
              size={responsive(25)}
              color={AppColor.primary}
            />
          </View>
        </TouchableOpacity>
        {/* Mobile */}
        <View style={styles.inputHolder}>
          <Text style={styles.labelText}>{string.Mobile_No}</Text>
          <TextInput
            placeholder={string.Mobile_No}
            value={mobile}
            maxLength={10}
            keyboardType="number-pad"
            placeholderTextColor={AppColor.black}
            style={styles.textInputBox}
            onChangeText={text => setMobile(text)}
          />
        </View>
        {/* Email */}
        <View style={styles.inputHolder}>
          <Text style={styles.labelText}>{string.Email_Id}</Text>
          <TextInput
            placeholder={string.Email_Id}
            value={email}
            keyboardType="email-address"
            placeholderTextColor={AppColor.black}
            style={styles.textInputBox}
            onChangeText={text => setEmail(text)}
          />
        </View>
        {/* Address */}
        <View style={styles.inputHolder}>
          <Text style={styles.labelText}>{string.Address}</Text>
          <TextInput
            placeholder={string.Address}
            value={address}
            keyboardType="default"
            multiline={true}
            placeholderTextColor={AppColor.black}
            style={styles.textInputBox}
            onChangeText={text => setAddress(text)}
          />
        </View>
        {/* pinCode and State */}
        <View style={styles.view}>
          <View style={[styles.inputHolder, {width: '45%'}]}>
            <Text style={styles.labelText}>{string.Pin_Code}</Text>
            <TextInput
              placeholder={string.Pin_Code}
              value={pinCode}
              placeholderTextColor={AppColor.black}
              style={styles.textInputBox}
              onChangeText={text => setPinCode(text)}
            />
          </View>
          <View style={[styles.inputHolder, {width: '45%'}]}>
            <Text style={styles.labelText}>{string.State}</Text>
            <TextInput
              placeholder={string.State}
              value={state}
              placeholderTextColor={AppColor.black}
              style={styles.textInputBox}
              onChangeText={text => setState(text)}
            />
          </View>
        </View>
        {/* City and Landmark */}
        <View style={styles.view}>
          <View style={[styles.inputHolder, {width: '45%'}]}>
            <Text style={styles.labelText}>{string.City}</Text>
            <TextInput
              placeholder={string.City}
              value={city}
              placeholderTextColor={AppColor.black}
              style={styles.textInputBox}
              onChangeText={text => setCity(text)}
            />
          </View>
          <View style={[styles.inputHolder, {width: '45%'}]}>
            <Text style={styles.labelText}>{string.Landmark}</Text>
            <TextInput
              placeholder={string.Landmark}
              value={landmark}
              placeholderTextColor={AppColor.black}
              style={styles.textInputBox}
              onChangeText={text => setLandmark(text)}
            />
          </View>
        </View>
        {/* Create Account Button */}
        <View>
          <CustomButton
            title={string.Create_Account}
            handleAction={handleSubmit}
            color={AppColor.dark_Yellow}
          />
        </View>
        {/* Modal for the gender */}
        <Modal isVisible={showGenderModal}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelText}>{string.Select_Gender}</Text>
            <TouchableOpacity
              style={styles.buttonHolder}
              onPress={() => {
                setGender(string.Male);
                toggleGenderModal();
              }}>
              <FontAwesome
                name="male"
                size={responsive(25)}
                color={AppColor.white}
              />
              <Text style={styles.buttonText}>{string.Male}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHolder}
              onPress={() => {
                setGender(string.Female);
                toggleGenderModal();
              }}>
              <FontAwesome
                name="female"
                size={responsive(25)}
                color={AppColor.white}
              />
              <Text style={styles.buttonText}>{string.Female}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHolder}
              onPress={() => {
                setGender(string.Other);
                toggleGenderModal();
              }}>
              <Text style={styles.buttonText}>{string.Other}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {/* Modal for Image picker */}
        <Modal isVisible={showImageModal}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelText}>
              {string.Upload_Profile_Picture}
            </Text>
            <TouchableOpacity onPress={galleryOpen} style={styles.buttonHolder}>
              <MaterialIcons
                name="photo-library"
                size={responsive(25)}
                color={AppColor.white}
              />
              <Text style={styles.buttonText}>{string.Open_Gallery}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cameraOpen} style={styles.buttonHolder}>
              <MaterialIcons
                name="camera-alt"
                size={responsive(25)}
                color={AppColor.white}
              />
              <Text style={styles.buttonText}>{string.Open_Camera}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleModal} style={styles.buttonHolder}>
              <Text style={styles.buttonText}>{string.Cancel}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default NewRegistrationForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
    alignSelf: 'center',
  },
  scroll: {
    marginVertical: responsive(20),
    flex: 1,
  },
  inputHolder: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(10),
    borderColor: AppColor.white,
    backgroundColor: AppColor.white,
    marginBottom: responsive(20),
  },
  labelText: {
    color: AppColor.black,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
    margin: responsive(10),
    marginBottom: 0,
  },
  textInputBox: {
    margin: responsive(10),
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    marginTop: 0,
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
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  image: {
    height: responsive(200),
    width: responsive(200),
    alignSelf: 'center',
    borderRadius: responsive(100),
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
});
