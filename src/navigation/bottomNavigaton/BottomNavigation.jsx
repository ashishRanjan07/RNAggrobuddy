import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/AppScreens/Home/Home';
import Profile from '../../screens/AppScreens/Profile/Profile';
import Learn from '../../screens/AppScreens/Learn/Learn';
import MyPost from '../../screens/AppScreens/MyPost/MyPost';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import translations from '../../constant/String';
import Shop from '../../screens/AppScreens/Shop/Shop';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const language = useSelector(state => state.language);
  const string = translations[language];
  // console.log(string.Home,"Line 19")
  return (
    <Tab.Navigator
      initialRouteName={string.Home}
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === string.Home) {
            iconName = 'home';
          } else if (route.name === string.Profile) {
            iconName = 'user';
          } else if (route.name === string.Learn) {
            iconName = 'th-large';
          } else if (route.name === string.My_Post) {
            iconName = 'empire';
          } else if (route.name === string.shop) {
            iconName = 'shopping-cart';
          }

          return (
            <View style={styles.tabIconContainer}>
              <FontAwesome
                name={iconName}
                size={responsive(30)}
                color={color}
              />
            </View>
          );
        },
        tabBarLabel: ({focused}) => {
          let label;

          if (route.name === string.Home) {
            label = string.Home;
          } else if (route.name === string.Profile) {
            label = string.Profile;
          } else if (route.name === string.Learn) {
            label = string.Learn;
          } else if (route.name === string.My_Post) {
            label = string.My_Post;
          } else if (route.name === string.shop) {
            label = string.shop;
          }

          return (
            <Text
              style={[
                styles.tabLabel,
                {color: focused ? AppColor.light_Green : AppColor.light_Grey},
              ]}>
              {label}
            </Text>
          );
        },
        tabBarStyle: {
          height: responsive(75),
          backgroundColor: AppColor.white,
        },
        tabBarActiveTintColor: AppColor.light_Green,
        tabBarInactiveTintColor: AppColor.light_Grey,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name={string.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={string.My_Post}
        component={MyPost}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={string.shop}
        component={Shop}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={string.Learn}
        component={Learn}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={string.Profile}
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: responsive(16),
    fontFamily: 'OpenSans-Bold',
    marginBottom: responsive(5),
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
