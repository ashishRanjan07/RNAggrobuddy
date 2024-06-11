import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../CustomButton';

const AddNewPostForm = ({title, edit}) => {
  const [name, setName] = useState(edit ? edit?.name : '');
  const [price, setPrice] = useState(edit ? edit?.price : '');
  const [description, setDescription] = useState(edit ? edit?.description : '');
  const [quantity, setQuantity] = useState(edit ? edit?.quantity : '');
  const [selectedProductImage, setSelectedProductImage] = useState(
    edit ? edit?.images : '',
  );
  const [address, setAddress] = useState(edit ? edit?.address : '');
  const [nameError, setNameError] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState('');
  const [showDescriptionError, setShowDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState('');
  const [showPriceError, setShowPriceError] = useState(false);
  const [quantityError, setQuantityError] = useState('');
  const [showQuantityError, setShowQuantityError] = useState(false);
  const [addressError, setAddressError] = useState('');
  const [showAddressError, setShowAddressError] = useState(false);

  const galleryOpen = async () => {
    try {
      const images = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
        includeBase64: false,
        maxFiles: 3,
        maxHeight: 2000,
        maxWidth: 2000,
      });
      if (images && images.length > 0) {
        const imageUris = images.map(image => image.path);
        setSelectedProductImage(imageUris);
      } else {
        console.log('User Cancelled Image Picker');
      }
    } catch (error) {
      console.log('Image Picker Error:', error);
    }
  };

  const handleRemoveImage = index => {
    const updatedImages = [...selectedProductImage];
    updatedImages.splice(index, 1);
    setSelectedProductImage(updatedImages);
  };

  useEffect(() => {
    if (name?.length > 0) {
      setShowNameError(false);
      setNameError('');
    }
    if (description?.length > 0) {
      setShowDescriptionError(false);
      setDescriptionError('');
    }
    if (price?.length > 0) {
      setShowPriceError(false);
      setPriceError('');
    }
    if (quantity?.length > 0) {
      setShowQuantityError(false);
      setQuantityError('');
    }
    if (address?.length > 0) {
      setShowAddressError(false);
      setAddressError('');
    }
  }, [name, description, price, quantity, address]);

  const handleSubmit = () => {
    let isValid = true;

    if (name?.trim() === '') {
      setShowNameError(true);
      setNameError('Please enter a product name.');
      isValid = false;
    }

    if (description?.trim() === '') {
      setShowDescriptionError(true);
      setDescriptionError('Please enter a product description.');
      isValid = false;
    }

    if (price?.trim() === '') {
      setShowPriceError(true);
      setPriceError('Please enter a product price.');
      isValid = false;
    }

    if (quantity?.trim() === '') {
      setShowQuantityError(true);
      setQuantityError('Please enter a product quantity.');
      isValid = false;
    }

    if (address?.trim() === '') {
      setShowAddressError(true);
      setAddressError('Please enter a product address.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    if (edit) {
      console.log(
        'Edit Mode Console Data: - ',
        name,
        description,
        price,
        quantity,
        address,
        selectedProductImage,
      );
    } else {
      console.log(
        'Add Mode Console Data : -',
        name,
        description,
        price,
        quantity,
        address,
        selectedProductImage,
      );
    }
  };

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      {/* Name of Product */}
      <View style={styles.viewHolder}>
        <Text style={styles.pName}>Product Name</Text>
        <TextInput
          placeholder="Enter Product Name"
          placeholderTextColor={AppColor.black}
          value={name}
          onChangeText={text => setName(text)}
          keyboardType="default"
          multiline={true}
          style={styles.inputBoxHolder}
        />
      </View>
      {showNameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      {/* Description of products */}
      <View style={styles.viewHolder}>
        <Text style={styles.pName}>Product Description</Text>
        <TextInput
          placeholder="Enter Product Description"
          placeholderTextColor={AppColor.black}
          value={description}
          onChangeText={text => setDescription(text)}
          keyboardType="default"
          multiline={true}
          style={styles.inputBoxHolder}
        />
      </View>
      {showDescriptionError ? (
        <Text style={styles.errorText}>{descriptionError}</Text>
      ) : null}
      {/* Price of products */}
      <View style={styles.viewHolder}>
        <Text style={styles.pName}>Product Price</Text>
        <TextInput
          placeholder="Enter Product Price"
          placeholderTextColor={AppColor.black}
          value={price}
          onChangeText={text => setPrice(text)}
          keyboardType="number-pad"
          maxLength={8}
          style={styles.inputBoxHolder}
        />
      </View>
      {showPriceError ? (
        <Text style={styles.errorText}>{priceError}</Text>
      ) : null}
      {/* Quantity of products */}
      <View style={styles.viewHolder}>
        <Text style={styles.pName}>Product Quantity</Text>
        <TextInput
          placeholder="Enter Product Quantity"
          placeholderTextColor={AppColor.black}
          value={quantity}
          onChangeText={text => setQuantity(text)}
          keyboardType="default"
          maxLength={15}
          style={styles.inputBoxHolder}
        />
      </View>
      {showQuantityError ? (
        <Text style={styles.errorText}>{quantityError}</Text>
      ) : null}
      {/* Address of products */}
      <View style={styles.viewHolder}>
        <Text style={styles.pName}>Product Address</Text>
        <TextInput
          placeholder="Enter Product Address"
          placeholderTextColor={AppColor.black}
          value={address}
          onChangeText={text => setAddress(text)}
          keyboardType="default"
          style={styles.inputBoxHolder}
        />
      </View>
      {showAddressError ? (
        <Text style={styles.errorText}>{addressError}</Text>
      ) : null}
      {/* Select Multiple product's images */}
      <TouchableOpacity
        style={[styles.viewHolder, styles.button]}
        onPress={() => galleryOpen()}>
        <FontAwesome
          name="image"
          size={responsive(30)}
          color={AppColor.black}
        />
        <Text style={styles.buttonText}>Select Multiple Product Image</Text>
      </TouchableOpacity>
      {selectedProductImage.length !== 0 && (
        <View style={styles.imageContainer}>
          {selectedProductImage.map((uri, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image key={index} source={{uri: uri}} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => handleRemoveImage(index)}>
                <Feather name="x" size={20} color={AppColor.white} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <View style={styles.buttonHolder}>
        <CustomButton
          title={title}
          color={AppColor.dark_Yellow}
          handleAction={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default AddNewPostForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  viewHolder: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 2,
    marginVertical: responsive(10),
    padding: responsive(10),
    borderRadius: responsive(10),
    gap: responsive(10),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.dark_Brown,
  },
  pName: {
    fontSize: responsive(18),
    color: AppColor.light_Green,
    fontFamily: 'OpenSans-Medium',
  },
  inputBoxHolder: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Green,
  },
  button: {
    backgroundColor: AppColor.dark_Green,
    borderColor: AppColor.dark_Green,
    padding: responsive(15),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: responsive(10),
  },
  buttonText: {
    fontFamily: 'OpenSans-Medium',
    color: AppColor.black,
    fontSize: responsive(18),
  },
  image: {
    height: responsive(150),
    width: responsive(150),
    resizeMode: 'cover',
    borderRadius: responsive(10),
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsive(20),
    marginBottom: responsive(15),
  },
  imageWrapper: {
    position: 'relative',
  },
  deleteIcon: {
    position: 'absolute',
    top: responsive(5),
    right: responsive(5),
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: responsive(10),
    padding: responsive(5),
  },
  buttonHolder: {
    width: '95%',
    alignSelf: 'center',
  },
  errorText: {
    color: 'red', // You can customize this color
    marginHorizontal: responsive(20),
  },
});
