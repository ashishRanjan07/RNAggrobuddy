import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Data from '../../../assets/json/Category.json';
import AppColor from '../../../constant/AppColor';
import {responsive} from '../../../constant/Responsive';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../componets/CustomHeader';
const Learn = () => {
    const navigation = useNavigation();
//   console.log(Data, 'Line 5');
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderHolder} key={item.id} onPress={()=> navigation.navigate('Product Category',{item})}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <StatusBar backgroundColor={AppColor.primary} barStyle={'dark-content'} />
      <CustomHeader title={"Guide"}/>
      <View style={styles.flatListHolder}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={Data.Farming_Products_Category}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  flatListHolder: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
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
  image: {
    height: responsive(125),
    width: responsive(150),
    borderRadius:responsive(10)
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Bold',
    textAlign:'center'
  },
});
