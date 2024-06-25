import {Image, ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppColor from '../../constant/AppColor';
import Swiper from 'react-native-swiper';
import {responsive} from '../../constant/Responsive';
import StarRating from 'react-native-star-rating-widget';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';
import CustomAlert from '../CustomAlert';
import AddressComponents from './AddressComponents';

const ProductDetailsScreens = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  const [rating, setRating] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);

  const findAverageRating = reviews => {
    let totalRating = 0;
    reviews.forEach(review => {
      totalRating += review.rating;
    });
    const averageRating = totalRating / reviews.length;
    setRating(averageRating.toFixed(1));
  };

  const findNewPrice = promotions => {
    setDiscountedAmount((item.price * promotions.value) / 100);
    setNewPrice(item.price - (item.price * promotions.value) / 100);
  };
  useEffect(() => {
    if (item && item.reviews) {
      findAverageRating(item.reviews);
    }
    if (item && item.promotions) {
      findNewPrice(item.promotions[0]);
    }
  }, [item]);

  const handelAddToCart = () => {
    setAlertVisible(true);
  };
  const handelBuyNow = item => {
    // console.log('Buy Noe Button Pressed',item);
    navigation.navigate('Buy Now', {item});
  };
  const handelSuccess = () => {
    // console.log('Success');
    setAlertVisible(false);
  };
  return (
    <View style={styles.main}>
      <ScrollView style={styles.main}>
        <View>
          {/* Image View */}
          <Swiper
            autoplay={true}
            autoplayTimeout={2}
            style={styles.swiper}
            showsPagination={false}>
            {item.images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            ))}
          </Swiper>
          {/* Product title */}
          <View style={styles.detailsHolder}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          {/* Rating and Brand Authorization */}
          <View style={styles.ratingHolder}>
            <View style={styles.rating}>
              <StarRating
                rating={rating}
                onChange={setRating}
                starSize={responsive(25)}
                color={AppColor.dark_Green}
                starStyle={{marginHorizontal: 0}}
              />
              <Text style={styles.ratingText}>{rating} ratings</Text>
            </View>
            <Text style={styles.manufacturerText}>{item.manufacturer}</Text>
          </View>
          {/* Rate List */}
          <View style={styles.priceHolder}>
            <Text style={styles.price}>Price : {item.price} /unit</Text>
            <Text style={styles.description}>{item?.description}</Text>
          </View>
          {/* Discount and Delivery Details */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.priceHolder, {width: '70%'}]}>
              <View style={styles.rating}>
                <AntDesign
                  name="arrowdown"
                  size={responsive(25)}
                  color={AppColor.dark_Green}
                />
                <Text
                  style={[
                    styles.price,
                    {color: AppColor.dark_Green, fontWeight: 'bold'},
                  ]}>
                  {item?.promotions[0].value} %{' '}
                </Text>
                <Text style={styles.price}>Rs.</Text>
                <Text
                  style={[styles.price, {textDecorationLine: 'line-through'}]}>
                  {item.price}{' '}
                </Text>
                <Text style={styles.price}>Rs.{newPrice}</Text>
              </View>
              <Text style={styles.price}>
                {'Buy Now and Save Rs.'} {discountedAmount}
              </Text>
              <View style={styles.rating}>
                <Text style={styles.price}>Free Delivery by </Text>
                <Text style={[styles.price, {color: AppColor.dark_Green}]}>
                  tomorrow
                </Text>
              </View>
            </View>
            <View style={[styles.priceHolder, {alignItems: 'center'}]}>
              <Text style={styles.price}>{item?.additionalInfo?.warranty}</Text>
              <Text style={styles.price}>Warranty</Text>
            </View>
          </View>
          {/* Address  */}
          <AddressComponents />
        </View>
      </ScrollView>
      <View style={styles.buttonHolder}>
        <View style={{width: '45%'}}>
          <CustomButton
            title={'Add To Cart'}
            handleAction={handelAddToCart}
            color={AppColor.dark_Yellow}
          />
        </View>
        <View style={{width: '45%'}}>
          <CustomButton
            title={'Buy Now'}
            handleAction={() => handelBuyNow(item)}
            color={AppColor.dark_Green}
          />
        </View>
      </View>
      <CustomAlert
        visible={alertVisible}
        title={'Success'}
        message={'Product added to cart successfully'}
        onClose={() => setAlertVisible(!alertVisible)}
        onConfirm={handelSuccess}
      />
    </View>
  );
};

export default ProductDetailsScreens;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  swiper: {
    height: responsive(400),
  },
  imageStyle: {
    width: '100%',
    height: responsive(400),
    borderRadius: responsive(20),
  },
  detailsHolder: {
    width: '100%',
    paddingHorizontal: responsive(15),
  },
  title: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Grey,
  },
  ratingHolder: {
    marginVertical: responsive(10),
    paddingHorizontal: responsive(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  manufacturerText: {
    padding: responsive(10),
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Bold',
  },
  ratingText: {
    color: AppColor.dark_Green,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
  },
  price: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  description: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.dark_Grey,
  },
  priceHolder: {
    paddingHorizontal: responsive(15),
    gap: 5,
    marginBottom: responsive(20),
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  addressSection: {
    borderWidth: 2,
    width: '70%',
  },
  addressHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsive(15),
    alignItems: 'center',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
