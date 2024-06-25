import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePath from '../../constant/ImagePath';
import {launchCamera} from 'react-native-image-picker';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const IdentityProofVerication = ({route}) => {
  const navigation = useNavigation();
  const {idVerificationStatus} = route.params;
  const [idProofSelection, setIdProofSelection] = useState('Aadhar Card');
  const [isDocUploaded, setIsDocUpload] = useState(false);
  const [uploadedImage, setUploadImage] = useState('');
  const handleProofSelection = async card => {
    setIdProofSelection(card);
    setIsDocUpload(false);
    setUploadImage('');
  };
  const handleImageSelection = async type => {
    // console.log('Image Upload Clicked ', type);
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
          // console.log('User cancel Camera');
        } else if (response.error) {
          // console.log('Camera Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          setIsDocUpload(true);
          setUploadImage(imageUri);
        }
      });
    } catch (error) {
      // console.log('Error in Opening camera', error.message);
    }
  };
  const removeImage = async () => {
    setUploadImage('');
    setIdProofSelection('Aadhar Card');
    setIsDocUpload(false);
  };
  const HandleSubmit = async () => {
    // console.log('Submit Button Clicked');
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.contentHolder}>
        {/*Information View */}
        <View style={styles.infoTab}>
          <View style={styles.textHolder}>
            <Text style={styles.text}>
              Both ID proof and bank details (will be added later) should be of
              the same person.
            </Text>
          </View>
          <MaterialIcons
            name="lightbulb-circle"
            size={responsive(40)}
            color={AppColor.light_Yellow}
          />
        </View>
        {/* Id Proof Selection Tab */}
        <View style={styles.idProofSelection}>
          <Text style={styles.headerText}>
            Choose Only One ID proof* (Mandatory)
          </Text>
          <View style={styles.cardSelectionTab}>
            <TouchableOpacity
              onPress={() => handleProofSelection('Aadhar Card')}
              style={[
                styles.selectedCard,
                {
                  backgroundColor:
                    idProofSelection === 'Aadhar Card'
                      ? AppColor.dark_Green
                      : AppColor.light_Blue,
                },
              ]}>
              <Text style={styles.cardText}>Aadhar Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleProofSelection('Pan Card')}
              style={[
                styles.selectedCard,
                {
                  backgroundColor:
                    idProofSelection === 'Pan Card'
                      ? AppColor.dark_Green
                      : AppColor.light_Blue,
                },
              ]}>
              <Text style={styles.cardText}>PAN Card</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Upload Text title and Description */}
        <View style={styles.idProofSelection}>
          <Text style={styles.cardText}>Upload Photo of ID proof</Text>
          <Text style={styles.subHeadingText}>
            Card should be clearly visible
          </Text>
        </View>
      </View>
      <View style={styles.docHolder}>
        {isDocUploaded && idProofSelection ? (
          <View style={styles.imageHolderSection}>
            {uploadedImage ? (
              <Image
                source={{uri: uploadedImage}}
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
            onPress={() => handleImageSelection(idProofSelection)}>
            <View style={styles.imageSection}>
              <Image
                source={
                  idProofSelection === 'Aadhar Card'
                    ? ImagePath.aadhar
                    : ImagePath.pan
                }
                resizeMode="contain"
                style={styles.imageIcon}
              />
            </View>
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
                Upload {idProofSelection} photo
              </Text>
              <Text
                style={[
                  styles.cardUploadText,
                  {color: AppColor.warning, marginBottom: responsive(10)},
                ]}>
                Front Side Only
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {/* Button */}
      {uploadedImage && (
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

export default IdentityProofVerication;

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
  idProofSelection: {
    padding: responsive(15),
  },
  headerText: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Bold',
  },
  cardSelectionTab: {
    marginTop: responsive(15),
    flexDirection: 'row',
    gap: responsive(15),
    alignItems: 'center',
  },
  selectedCard: {
    padding: responsive(10),
    borderRadius: responsive(10),
  },
  cardText: {
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
  },
  subHeadingText: {
    fontSize: responsive(14),
    color: AppColor.dark_Grey,
    marginTop: responsive(5),
    fontFamily: 'OpenSans-Medium',
  },
  docHolder: {
    borderWidth: 1,
    backgroundColor: AppColor.light_Grey,
    borderColor: AppColor.light_Grey,
    padding: responsive(15),
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
