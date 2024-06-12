import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColor from '../../constant/AppColor';
import Data from '../../assets/json/Address.json';
import {responsive} from '../../constant/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const ListOfSaveAddress = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <View style={styles.nameHolder}>
          <Text style={styles.nameText}>{item.Name}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('Edit Address', {item})
            }>
            <AntDesign
              name="edit"
              size={responsive(25)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionText}>
          {item.HouseNo} {''} {item.RoadName}
        </Text>
        <Text style={styles.descriptionText}>
          {item.City} {''} {item.State} {item.Pincode}
        </Text>
        <Text style={styles.descriptionText}>
          {item.PhoneNo} {''} {item.TypeOfAddress}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ListOfSaveAddress;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  renderView: {
    gap: 10,
    borderWidth: 2,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.white,
  },
  nameHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  descriptionText: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'OpenSans-Regular',
  },
});
