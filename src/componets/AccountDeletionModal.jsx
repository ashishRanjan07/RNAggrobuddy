// AccountDeletionModal.js
import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {responsive} from '../constant/Responsive';
import AppColor from '../constant/AppColor';
import ImagePath from '../constant/ImagePath';

const AccountDeletionModal = ({visible, onClose, onConfirm}) => {
  const [stage, setStage] = useState(1);
  const [otp, setOtp] = useState('');

  const handleConfirm = () => {
    if (stage === 1) {
      setStage(2);
    } else {
      setStage(1);
      onConfirm();
      setOtp('');
    }
  };

  const handleCancel = () => {
    onClose();
    setStage(1);
    setOtp('');
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={stage === 1 ? onClose : handleCancel}>
            <Feather name="x" size={responsive(25)} color={AppColor.black} />
          </TouchableOpacity>
          {stage === 1 ? (
            <>
              <Text style={styles.title}>Account Deletion</Text>
              <Text style={styles.subtitle}>
                Are you sure you want to delete your account?
              </Text>
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
            </>
          ) : (
            <>
              <Image source={ImagePath.farmer} style={styles.profileImage} />
              <Text style={styles.title}>Ashish Ranjan</Text>
              <Text style={styles.subtitle}>Enter OTP to confirm deletion</Text>
              <TextInput
                style={styles.otpInput}
                value={otp}
                maxLength={4}
                onChangeText={setOtp}
                placeholder="Enter OTP"
                placeholderTextColor={AppColor.black}
                keyboardType="numeric"
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: responsive(10),
                }}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCancel}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleConfirm}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: responsive(20),
    borderTopLeftRadius: responsive(20),
    borderTopRightRadius: responsive(20),
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: responsive(20),
    textAlign: 'center',
    marginVertical: responsive(10),
    color: AppColor.warning,
    fontFamily: 'OpenSans-Bold',
  },
  subtitle: {
    fontSize: responsive(16),
    textAlign: 'center',
    marginBottom: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cancelButton: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: AppColor.light_Green,
    padding: responsive(10),
    borderRadius: responsive(10),
  },
  confirmButton: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: AppColor.warning,
    padding: responsive(10),
    borderRadius: responsive(10),
  },
  buttonText: {
    color: AppColor.white,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(18),
  },
  profileImage: {
    width: responsive(100),
    height: responsive(100),
    borderRadius: responsive(50),
    alignSelf: 'center',
    marginBottom: responsive(20),
  },
  otpInput: {
    borderWidth: 1,
    borderColor: AppColor.gray,
    borderRadius: responsive(10),
    padding: responsive(10),
    marginVertical: responsive(10),
    textAlign: 'center',
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.warning,
  },
});

export default AccountDeletionModal;
