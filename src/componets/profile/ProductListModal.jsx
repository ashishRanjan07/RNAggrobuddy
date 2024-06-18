import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import {useSelector} from 'react-redux';
import translations from '../../constant/String';
import Data from '../../assets/json/ProductList.json';
const ProductListModal = ({visible, onClose, onConfirm}) => {
  const [search, setSearch] = useState('');
  const [productId,setProductId] = useState('')

  const filteredData = Data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );


const handleSearchText = item => {
    setProductId(item.id); // Assuming you still want to set productId somewhere
    onClose();
    if (typeof onConfirm === 'function') {
      onConfirm(item); // Call the onConfirm prop with the item's name
    } else {
      console.error('onConfirm is not a function');
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.itemHolder}
        onPress={() => handleSearchText(item)}>
        <Text style={{color: AppColor.black}}>{item.name}</Text>
        <AntDesign
          name="caretright"
          size={responsive(20)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
    );
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
          <TextInput
            style={styles.textInputBox}
            placeholder="Search Product Name"
            placeholderTextColor={AppColor.primary}
            value={search}
            onChangeText={text => setSearch(text)}
          />
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          />
          <TouchableOpacity
            style={[styles.textInputBox, {backgroundColor: AppColor.primary}]}
            onPress={onClose}>
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ProductListModal;

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
    flex: 0.8,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  textInputBox: {
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(20),
    borderWidth: 2,
    padding: responsive(10),
    borderRadius: responsive(5),
    borderColor: AppColor.primary,
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.white,
    textAlign: 'center',
  },
  itemHolder: {
    borderWidth: 1,
    padding: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsive(5),
    borderRadius: responsive(5),
    borderColor: AppColor.primary,
    alignItems: 'center',
  },
});
