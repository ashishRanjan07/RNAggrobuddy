import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AppColor from '../constant/AppColor';
import {responsive} from '../constant/Responsive';
import {useSelector} from 'react-redux';
import translations from '../constant/String';
const TermsAndConditionModal = ({visible, onClose, onConfirm}) => {
  const language = useSelector(state => state.language);
  const string = translations[language];
  const handleConfirm = () => {
    // console.log('You agree with the our terms and condition');
    onClose();
  };
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={responsive(25)} color={AppColor.black} />
          </TouchableOpacity>
          <Text style={styles.title}>{string.title}</Text>
          <Text style={styles.date}>Last Updated on : 12-06-2024</Text>
          <Text style={styles.description}>{string.description}</Text>
          <Text style={styles.description}>{string.dataSharing}</Text>
          <Text style={styles.description}>{string.securityMeasures}</Text>
          <Text style={styles.description}>{string.updates}</Text>
          <Text style={styles.description}>{string.contactUs}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TermsAndConditionModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: AppColor.white,
    padding: responsive(20),
    borderTopLeftRadius: responsive(20),
    borderTopRightRadius: responsive(20),
    gap: responsive(10),
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Bold',
  },
  date: {
    fontSize: responsive(15),
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Bold',
  },
  description: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'OpenSans-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cancelButton: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: AppColor.warning,
    padding: responsive(10),
    borderRadius: responsive(10),
  },
  confirmButton: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: AppColor.dark_Green,
    padding: responsive(10),
    borderRadius: responsive(10),
  },
  buttonText: {
    color: AppColor.white,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(18),
  },
});
