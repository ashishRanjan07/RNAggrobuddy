import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import StarRating from 'react-native-star-rating-widget';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PriceBreakUp from './PriceBreakUp';
import CustomButton from '../CustomButton';

const AddressProductDetails = ({item}) => {
  const [rating, setRating] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [price, setPrice] = useState(item?.price ? item?.price : 0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [qty, setQty] = useState(1);
  const findAverageRating = reviews => {
    let totalRating = 0;
    reviews.forEach(review => {
      totalRating += review.rating;
    });
    const averageRating = totalRating / reviews.length;
    setRating(averageRating.toFixed(1));
  };

  const findNewPrice = promotions => {
    setDiscountedAmount(qty * ((item.price * promotions.value) / 100));
    setNewPrice(qty * (item.price - (item.price * promotions.value) / 100));
  };
  const findActualPrice = actualPrice => {
    setPrice(qty * actualPrice);
  };
  useEffect(() => {
    if (item && item.reviews) {
      findAverageRating(item.reviews);
    }
    if (item && item.promotions) {
      findNewPrice(item.promotions[0]);
    }
    if (item && item.price) {
      findActualPrice(item.price);
    }
  }, [item, qty]);
  const handleBuyNow = () => {
    console.log('Buy Now Button Clicked');
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.contentHolder}>
          <View style={styles.imageHolderView}>
            <Image
              source={{uri: item.images[0]}}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            {/* Quantity Holder */}
            <View style={styles.quantityHolder}>
              <Text style={styles.qtyText}>Qty</Text>
              <TouchableOpacity onPress={() => setQty(qty - 1)}>
                <AntDesign
                  name="minuscircle"
                  size={responsive(20)}
                  color={AppColor.primary}
                />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{qty}</Text>
              <TouchableOpacity onPress={() => setQty(qty + 1)}>
                <Ionicons
                  name="add-circle-sharp"
                  size={responsive(20)}
                  color={AppColor.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: '70%'}}>
            <View style={styles.detailsHolder}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            {/* Rating and Brand Authorization */}
            <View style={styles.ratingHolder}>
              <View style={styles.rating}>
                <StarRating
                  rating={rating}
                  onChange={setRating}
                  starSize={responsive(15)}
                  color={AppColor.dark_Green}
                  starStyle={{marginHorizontal: 0}}
                />
                <Text style={styles.ratingText}>{rating}</Text>
              </View>
              <Text style={styles.manufacturerText}>{item.manufacturer}</Text>
            </View>
            <View style={styles.view}>
              <View style={[styles.priceHolder, {width: '60%'}]}>
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
                    style={[
                      styles.price,
                      {textDecorationLine: 'line-through'},
                    ]}>
                    {price}{' '}
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
                <Text style={styles.price}>
                  {item?.additionalInfo?.warranty}
                </Text>
                <Text style={styles.price}>Warranty</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <PriceBreakUp
        discountedAmount={discountedAmount}
        newPrice={newPrice}
        actualPrice={price}
        item={item}
      />
      {/* Lower Button */}
      <View style={styles.buttonHolder}>
        <View style={styles.priceTab} >
          <Text style={[styles.price, {textDecorationLine: 'line-through'}]}>
            {price}{' '}
          </Text>
          <Text style={styles.price}>Rs.{newPrice}</Text>
        </View>

        <View style={{width: '45%'}}>
          <CustomButton
            title={'Buy Now'}
            color={AppColor.dark_Yellow}
            handleAction={handleBuyNow}
          />
        </View>
      </View>
    </>
  );
};

export default AddressProductDetails;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: responsive(15),
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    elevation: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    borderRadius: responsive(10),
  },
  contentHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    paddingHorizontal: responsive(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingText: {
    color: AppColor.dark_Green,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manufacturerText: {
    padding: responsive(10),
    fontSize: responsive(14),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
  priceHolder: {
    paddingHorizontal: responsive(15),
    gap: 5,
    marginBottom: responsive(20),
  },
  price: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  imageStyle: {
    height: responsive(125),
    width: '100%',
  },
  imageHolderView: {
    width: '30%',
    alignItems: 'center',
    marginBottom: responsive(10),
  },
  quantityHolder: {
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: responsive(5),
    borderRadius: responsive(5),
  },
  qtyText: {
    fontSize: responsive(14),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: responsive(10),
    alignItems: 'center',
    marginVertical:responsive(20),
  },
  priceTab:{
    borderWidth:2,
    backgroundColor:AppColor.primary,
   borderRadius:responsive(5),
   padding:responsive(15),
   borderColor:AppColor.primary,
   flexDirection:'row',
   gap:responsive(10),
   alignItems:'center'
  }
});
