import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Data from '../../assets/json/HomeCrop.json';
const HomeCropPicker = () => {
  return (
    <View style={styles.main}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scroll}>
        <View style={styles.itemHolder}>
          <TouchableOpacity style={styles.addHolder}>
            <MaterialIcons
              name="add"
              size={responsive(40)}
              color={AppColor.dark_Green}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Add</Text>
        </View>

        {Data.map((crop, index) => (
          <TouchableOpacity style={styles.itemHolder} key={index}>
            <View style={styles.addHolder}>
              <Image
                source={{uri: crop.image}}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>{crop.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeCropPicker;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    padding: responsive(10),
    paddingHorizontal: responsive(15),
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    marginBottom: responsive(10),
    elevation: responsive(10),
    width: '95%',
    alignSelf: 'center',
  },
  itemHolder: {
    width: responsive(70),
    height: responsive(100),
    alignItems: 'center',
    marginHorizontal: responsive(10),
    gap: responsive(10),
  },
  addHolder: {
    borderWidth: 2,
    borderColor: AppColor.dark_Green,
    backgroundColor: AppColor.white,
    width: responsive(70),
    height: responsive(70),
    borderRadius: responsive(35),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  scroll: {
    gap: responsive(10),
  },
  image: {
    height: responsive(70),
    width: responsive(70),
    borderRadius: responsive(35),
  },
  text: {
    color: AppColor.black,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Medium',
  },
});
