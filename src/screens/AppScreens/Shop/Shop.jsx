import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AppColor from '../../../constant/AppColor';
import CustomHeader from '../../../componets/CustomHeader';
import Data from '../../../assets/json/Shoping.json';
import {responsive} from '../../../constant/Responsive';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
// Get the window width

const Shop = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Product Details', {item})}
        key={item.id}
        style={styles.renderHolder}>
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
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.availableText}>
          available: {item.stock.quantity} piece
        </Text>
        <View style={styles.lowerViewHolder}>
          <Text style={styles.priceText}>Rs.{item.price}</Text>
          <Text style={styles.priceText}>
            Weight: {item?.additionalInfo?.weight}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <StatusBar backgroundColor={AppColor.primary} barStyle={'dark-content'} />
      <CustomHeader title={'Shop with Us'} />
      <View style={styles.flatListHolder}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data.products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  flatListHolder: {
    flex: 1,
    marginVertical: responsive(10),
    width: '100%',
    alignItems: 'center',
  },
  innerView: {
    padding: responsive(10),
    gap: 10,
  },
  swiper: {
    height: responsive(150),
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth:2,
  },
  imageStyle: {
    width: responsive(150),
    height: responsive(150),
    borderRadius: responsive(20),
  },
  title: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
  },
  lowerViewHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10,
    justifyContent: 'space-between',
  },
  priceText: {
    color: AppColor.black,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
  },
  availableText: {
    fontSize: responsive(17),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Green,
    textAlign: 'center',
  },
  productContainer: {
    borderWidth: responsive(1),
    width: responsive(200),
    borderRadius: responsive(5),
    overflow: 'hidden',
    elevation: responsive(10),
    backgroundColor: AppColor.white,
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
    borderColor: AppColor.white,
    // alignItems: 'center',
  },
  renderHolder: {
    borderWidth: 2,
    backgroundColor: AppColor.white,
    flexDirection: 'column',
    width: '45%',
    elevation: 10,
    borderColor: AppColor.white,
    alignItems: 'center',
    gap: responsive(10),
    borderRadius: responsive(10),
    padding: responsive(15),
    margin: responsive(10),
  },
});
