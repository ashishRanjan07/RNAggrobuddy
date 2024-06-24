import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Monitoring from '../../assets/json/Monitoring.json';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchCamera} from 'react-native-image-picker';

const CropMonitoring = () => {
  const navigation = useNavigation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [groundImage, setGroundImage] = useState('');

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
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
          setGroundImage(imageUri);
          hideAlert();
        }
      });
    } catch (error) {
      console.log('Error in Opening camera', error.message);
    }
  };

  const handleAddFarm = async () => {
    console.log('Please Add Farm');
    setAlertVisible(true);
    // navigation.goBack();
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItemHolder} key={item.id}>
        <Text style={styles.headerText}>{item.heading} </Text>
        <View style={styles.separator} />
        {item.topic.map(topic => (
          <View key={topic.id} style={styles.itemHolder}>
            <Image
              source={{uri: topic.image}}
              resizeMode="cover"
              style={styles.image}
            />
            <Text style={styles.topicText}>{topic.description}</Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: AppColor.white}}>
      <ScrollView style={{flex: 0.8}}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XFfOAec0yXLJ35x6DpDSdwxx29VabeyTLw&s',
          }}
          resizeMode="cover"
          style={styles.imageStyle}
        />

        <FlatList
          style={{flex: 1}}
          data={Monitoring}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </ScrollView>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <CustomButton
          title={'+ Add New Farm'}
          handleAction={handleAddFarm}
          color={AppColor.dark_Green}
        />
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={alertVisible}
        onRequestClose={hideAlert}>
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Image
              source={{
                uri: 'https://image.freepik.com/free-photo/indian-farmer-taking-selfie-green-agriculture-field_54391-6016.jpg',
              }}
              resizeMode="cover"
              style={styles.modalImage}
            />
            <Text style={styles.modalText}>
              For correct result, Stay at your field and take a selfie.
            </Text>
            <TouchableOpacity style={styles.button} onPress={cameraOpen}>
              <Text style={styles.buttonText}>Yes, I have arrived</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={hideAlert}>
              <Text style={styles.buttonText}>No, I will do it later</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeImageIcon}
              onPress={hideAlert}>
              <MaterialIcons
                name="close"
                size={responsive(25)}
                color={AppColor.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CropMonitoring;

const styles = StyleSheet.create({
  imageStyle: {
    height: responsive(225),
    width: '100%',
    borderBottomLeftRadius: responsive(20),
    borderBottomRightRadius: responsive(20),
  },
  renderItemHolder: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderWidth: 2,
    padding: responsive(10),
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    elevation: responsive(10),
  },
  separator: {
    borderWidth: 1,
    backgroundColor: AppColor.light_Grey,
    borderColor: AppColor.light_Grey,
    marginVertical: responsive(10),
  },
  itemHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(15),
    marginVertical: responsive(5),
    padding: responsive(5),
  },
  headerText: {
    fontSize: responsive(20),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
  },
  topicText: {
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(16),
    color: AppColor.black,
    width: '85%',
  },
  image: {
    height: responsive(50),
    width: responsive(50),
    borderRadius: responsive(25),
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    width: '95%',
    padding: responsive(10),
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: responsive(10),
    backgroundColor: AppColor.primary,
    borderRadius: responsive(5),
    alignItems: 'center',
    marginVertical: responsive(5),
  },
  buttonText: {
    color: AppColor.white,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
  },
  modalText: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.black,
    textAlign: 'center',
    marginVertical: responsive(10),
    width: '90%',
  },
  removeImageIcon: {
    position: 'absolute',
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    top: responsive(10),
    right: responsive(10),
  },
  modalImage: {
    borderRadius: responsive(10),
    width: '100%',
    height: responsive(150),
  },
});
