import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {responsive} from '../constant/Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppColor from '../constant/AppColor';
import { useNavigation } from '@react-navigation/native';
const CustomHeader = ({title, onSearch}) => {
  const navigation= useNavigation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const positionAnim = useRef(new Animated.Value(-100)).current;
  const handleSearchChange = text => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  const clearSearchText = () => {
    setSearchText('');
    {
      if (onSearch) {
        onSearch();
      }
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    Animated.timing(positionAnim, {
      toValue: showSearch ? -100 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Ionicons name="menu" size={responsive(30)} color={AppColor.white} />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={toggleSearch}>
          <Ionicons
            name="search"
            size={responsive(30)}
            color={AppColor.white}
          />
        </TouchableOpacity>
      </View>
      {showSearch && (
        <Animated.View
          style={[
            styles.searchInputHolder,
            {transform: [{translateY: positionAnim}]},
          ]}>
          <TextInput
            style={styles.textInput}
            placeholder="Search Query"
            placeholderTextColor={AppColor.primary}
            value={searchText}
            onChangeText={handleSearchChange}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={clearSearchText}>
              <Ionicons
                name="close-circle-outline"
                size={responsive(30)}
                color={AppColor.primary}
              />
            </TouchableOpacity>
          )}
        </Animated.View>
      )}
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    padding: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: responsive(24),
    color: AppColor.black,
    fontFamily: 'OpenSans-Medium',
  },
  textInput: {
    fontSize: responsive(20),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
    borderRadius: responsive(10),
    width: '85%',
  },
  searchInputHolder: {
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    borderRadius: responsive(10),
    padding: responsive(5),
    borderColor: AppColor.white,
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(10),
  },
});
