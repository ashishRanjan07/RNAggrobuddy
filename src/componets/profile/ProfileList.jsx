import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
const ProfileList = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Order and Booking */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Order and Booking</Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Feather
                name="shopping-bag"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Orders</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Fontisto
                name="blood-test"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Soil Test Booking</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* Weather and Expert Suggestions */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Weather and Expert Suggestion</Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Weather Alert</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="connect-without-contact"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Connect With Expert</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* Earn and Support Suggestions */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Earn and Support</Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="share-outline"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Refer and Earn</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="logo-whatsapp"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Chat on Whatsapp</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* News and Rate List */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>
              Latest Mandi News and Rate List
            </Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="newspaper-outline"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Latest News</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="list"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Rate List</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
        {/* Accounts */}
        <View style={styles.contentHolder}>
          <View style={styles.headerHolder}>
            <Text style={styles.headerText}>Accounts</Text>
          </View>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Ionicons
                name="language"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Change Language</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Change Mode</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Entypo
                name="address"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Saved Address</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <Octicons
                name="code-of-conduct"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Terms and Conditions</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="privacy-tip"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Privacy Policy</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="folder-delete"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Account Deletion Request</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listHolder}>
            <View style={styles.iconHolder}>
              <MaterialIcons
                name="logout"
                size={responsive(25)}
                color={AppColor.black}
              />
              <Text style={styles.listText}>Logout</Text>
            </View>
            <Feather
              name="chevron-right"
              size={responsive(30)}
              color={AppColor.black}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: responsive(5),
    backgroundColor: AppColor.primary,
  },
  scroll: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
  },
  contentHolder: {
    borderWidth: 2,
    borderColor: AppColor.white,
    borderRadius: responsive(10),
    elevation: responsive(10),
    paddingVertical: responsive(10),
    backgroundColor: AppColor.white,
    marginVertical: responsive(10),
  },
  headerHolder: {
    borderLeftWidth: 4,
    borderColor: AppColor.light_Green,
    padding: responsive(5),
    marginLeft: -responsive(2),
  },
  headerText: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Bold',
    marginLeft: responsive(15),
  },
  listHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
    alignItems: 'center',
    gap: 10,
  },
  iconHolder: {
    width: '90%',
    borderWidth: 1,
    borderRadius: responsive(20),
    padding: responsive(10),
    marginVertical: responsive(10),
    flexDirection: 'row',
    gap: responsive(20),
  },
  listText: {
    fontSize: responsive(20),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
});
