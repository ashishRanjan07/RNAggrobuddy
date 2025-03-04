import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import {useNavigation} from '@react-navigation/native';

const MyPostList = ({data}) => {
    // console.log(data, 'Line 5');
  const navigation = useNavigation();

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <View style={styles.innerView}>
          <View style={{width: '40%'}}>
            <Swiper
              autoplay={true}
              autoplayTimeout={2}
              style={styles.swiper}
              showsPagination={false}>
              {item.images.map((image, index) => (
                <Image
                  key={index}
                  source={{uri: image}}
                  resizeMode="cover"
                  style={styles.imageStyle}
                />
              ))}
            </Swiper>
          </View>

          <View style={styles.descriptionHolder}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.description}>
              {truncateText(item.description, 20)}
            </Text>
          </View>
        </View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.price}>{item.quantity}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, {width: '100%'}]}
          onPress={() =>
            navigation.push('Add Product', {
              title: 'Edit Product',
              edit: true,
              data: item,
            })
          }>
          <Text style={styles.edit}>View/ Edit Products</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MyPostList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  renderView: {
    borderWidth: 2,
    borderColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderRadius: responsive(10),
    elevation: responsive(10),
    backgroundColor: AppColor.white,
    padding: responsive(10),
  },
  innerView: {
    flexDirection: 'row',
    gap: responsive(10),
    alignItems: 'center',
  },
  swiper: {
    height: responsive(200),
    // width: responsive(150),
  },
  imageStyle: {
    width: responsive(150),
    height: responsive(200),
    borderRadius: responsive(20),
  },
  productName: {
    color: AppColor.primary,
    fontSize: responsive(20),
    fontFamily: 'OpenSans-Bold',
  },
  descriptionHolder: {
    padding: 10,
    width: '55%',
    gap: responsive(10),
  },
  description: {
    fontSize: responsive(16),
    color: AppColor.dark_Grey,
    fontFamily: 'OpenSans-Medium',
    textAlign: 'justify',
  },
  price: {
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Green,
  },
  button: {
    padding: responsive(10),
    borderWidth: 2,
    borderColor: AppColor.dark_Yellow,
    borderRadius: responsive(10),
    backgroundColor: AppColor.dark_Yellow,
    alignItems: 'center',
    marginVertical: responsive(10),
    width: '45%',
    alignSelf: 'center',
  },
  edit: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});
