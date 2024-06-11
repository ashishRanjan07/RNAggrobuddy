import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {responsive} from '../../constant/Responsive';
import AppColor from '../../constant/AppColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const HomeSearch = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.main}>
      <AntDesign
        name="search1"
        size={responsive(30)}
        color={AppColor.dark_Green}
      />
      <Text style={styles.line}>|</Text>
      <TextInput
        placeholder="Search Product things..."
        placeholderTextColor={AppColor.black}
        value={search}
        onChangeText={text => setSearch(text)}
        style={styles.textInputBox}
      />
      <Text style={styles.line}>|</Text>
      <Feather name="mic" size={responsive(30)} color={AppColor.dark_Green} />
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsive(10),
    paddingHorizontal: responsive(15),
    justifyContent: 'space-between',
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    marginBottom: responsive(10),
    elevation: responsive(10),
    width: '95%',
    alignSelf: 'center',
  },
  line: {
    color: AppColor.black,
    fontSize: responsive(30),
    fontWeight: 'bold',
  },
  textInputBox: {
    width: '60%',
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.black,
  },
});
