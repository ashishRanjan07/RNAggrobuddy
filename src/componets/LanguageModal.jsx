import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppColor from '../constant/AppColor';
import {responsive} from '../constant/Responsive';

const LanguageModal = ({
  visible,
  title,
  onClose,
  buttonOneAction,
  buttonTwoAction,
  buttonOne,
  buttonTwo,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.button} onPress={buttonOneAction}>
            <Text style={styles.buttonText}>{buttonOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={buttonTwoAction}>
            <Text style={styles.buttonText}>{buttonTwo}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    width: responsive(300),
    padding: responsive(20),
    backgroundColor: 'white',
    borderRadius: responsive(10),
    alignItems: 'center',
  },
  title: {
    fontSize: responsive(18),
    fontWeight: 'bold',
    marginBottom: responsive(10),
    color: AppColor.black,
  },
  message: {
    color: AppColor.dark_Green,
    fontSize: responsive(16),
    marginBottom: responsive(20),
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
});
