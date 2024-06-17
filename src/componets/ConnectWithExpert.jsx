import {Modal, StyleSheet, Text, TouchableOpacity, View,Linking} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AppColor from '../constant/AppColor';
import {responsive} from '../constant/Responsive';
import {useSelector} from 'react-redux';
import translations from '../constant/String';

const ConnectWithExpert = ({visible, onClose}) => {
  const language = useSelector(state => state.language);
  const string = translations[language];
  const Data = [
    {id: 1, phoneNo: '18001801551'},
    {id: 2, phoneNo: '18001036110'},
  ];

  const handleCallOptions = async (item) => {
    Linking.openURL(`tel:+91${item?.phoneNo}`)
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
          <Text style={styles.title}>{string.ctitle}</Text>
          {Data.map((item, id) => (
            <TouchableOpacity
              key={item.id}
              style={styles.callView}
              onPress={()=>handleCallOptions(item)}>
              <Text style={styles.description}>{item.phoneNo}</Text>
              <Feather
                name="phone-call"
                size={responsive(25)}
                color={AppColor.primary}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ConnectWithExpert;

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
    textAlign: 'center',
  },
  description: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  callView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    padding: responsive(10),
  },
});
