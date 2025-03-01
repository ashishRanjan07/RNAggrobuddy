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
import React, {useEffect, useState} from 'react';
import CustomHeader from '../CustomHeader';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import SecondaryCustomHeader from '../SecondaryCustomHeader';

const ProductCategory = ({route}) => {
  const {item} = route.params;

  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setFilteredData(item?.products);
    setOriginalData(item?.products);
  }, []);
  const handleSearch = text => {
    if (!text || text === '') {
      setFilteredData(originalData);
    } else {
      const newData = originalData.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(newData);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderHolder} key={item.id}>
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
      <SecondaryCustomHeader title={item.name}/>
      <View style={styles.flatListHolder}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  flatListHolder: {
    marginVertical: responsive(10),
    flex: 1,
    width: '95%',
    alignSelf: 'center',
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
    borderRadius: responsive(10),
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.dark_Green,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
});
