import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NewsAPI} from '../../api/news';
import {useSelector} from 'react-redux';
import translations from '../../constant/String';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import ImagePath from '../../constant/ImagePath';
import {BarIndicator} from 'react-native-indicators';
import moment from 'moment';

const AgricultureNews = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const language = useSelector(state => state.language);
  const string = translations[language];

  const fetchDataFromAPI = async language => {
    const response = await NewsAPI(language);
    if (response.status == 'ok') {
      setData(response.articles);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataFromAPI(language);
  }, [language]);

  const renderItem = ({item}) => {
    const formattedPublishedAt =
    typeof item.publishedAt === 'string'
      ? moment(item.publishedAt).format('MMMM Do YYYY, h:mm:ss a')
      : 'Unknown';

    return (
      <View style={styles.renderViewHolder} key={item.description}>
        <View style={styles.imageHolder}>
          {!item.urlToImage ? (
            <Image
              source={ImagePath.farmer}
              resizeMode="stretch"
              style={{height: responsive(300), width: '100%'}}
            />
          ) : (
            <Image
              source={{uri: item?.urlToImage}}
              resizeMode="stretch"
              style={{height: responsive(300), width: '100%'}}
            />
          )}
        </View>
        <View style={styles.contentHolder}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.description}>{item?.description}</Text>
          {language==='en'&&(
          <Text style={styles.description}>{item?.content}</Text>)}
          <View style={styles.lowerContentHolder}>
            <Text style={styles.lowerText}>By: - {item?.author || 'N/A'}</Text>
            <Text style={styles.lowerText}>
              Source name: - {item.source.name || 'N/A'}
            </Text>
          </View>
          <Text style={styles.dateText}>
            {' '}
            Posted on : - {formattedPublishedAt}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.linkHolder}
          onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.link}>{item.url}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      {loading && (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      )}
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AgricultureNews;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  renderViewHolder: {
    flex: 1,
    borderWidth:2,
    padding:responsive(10),
    borderRadius:responsive(10),
    elevation:responsive(10),
    backgroundColor:AppColor.white,
    marginBottom:responsive(20),
    borderColor:AppColor.primary
  },
  imageHolder: {
    backgroundColor: AppColor.black,
    borderColor: AppColor.warning,
    height: responsive(300),
    width: '100%',
    alignItems: 'center',
  },
  contentHolder: {
    gap: responsive(10),
    width: '100%',
    alignSelf: 'center',
    padding: responsive(10),
  },
  title: {
    fontSize: responsive(20),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.primary,
    width: '100%',
    lineHeight: responsive(30),
  },
  description: {
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.black,
    width: '100%',
  },
  lowerContentHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerText: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
    width: '45%',
  },
  dateText: {
    fontSize: responsive(16),
    color: AppColor.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Medium',
  },
  linkHolder: {
    width: '100%',
    alignSelf: 'center',
    padding: responsive(10),
    backgroundColor: AppColor.light_Grey,
  },
  link: {
    color: AppColor.blue,
    textAlign: 'center',
    fontSize: responsive(16),
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.white,
  },
});
