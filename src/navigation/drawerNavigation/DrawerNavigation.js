import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from '../bottomNavigaton/BottomNavigation';
import AgricultureNews from '../../componets/profile/AgricultureNews';
import PrivacyPolicy from '../../componets/profile/PrivacyPolicy';
import Order from '../../componets/order/Order';
import CustomDrawer from './CustomDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Dashboard"
      backBehavior="initialRoute">
      <Drawer.Screen
        name="Dashboard"
        component={BottomNavigation}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <AntDesign
              name="home"
              size={responsive(24)}
              color={AppColor.dark_Green}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: true,
          drawerIcon: ({color}) => (
            <Feather
              name="package"
              size={responsive(24)}
              color={AppColor.dark_Green}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Latest News"
        component={AgricultureNews}
        options={{headerShown: true,
          drawerIcon: ({color}) => (
            <Ionicons
              name="newspaper-outline"
              size={responsive(24)}
              color={AppColor.dark_Green}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{headerShown: true,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="privacy-tip"
              size={responsive(24)}
              color={AppColor.dark_Green}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  labelStyle: {
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-600',
    fontSize: responsive(16),
  },
});
