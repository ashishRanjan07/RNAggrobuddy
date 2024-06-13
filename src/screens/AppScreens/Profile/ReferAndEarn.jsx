import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../../constant/AppColor';
import {responsive} from '../../../constant/Responsive';
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
import translations from '../../../constant/String';
import Clipboard from '@react-native-clipboard/clipboard';

const ReferAndEarn = () => {
  const language = useSelector(state => state.language);
  const string = translations[language];
  const [copiedText, setCopiedText] = useState(false);

  const copyReferralLink = () => {
    Clipboard.setString('https://aggrobuddy.com/ashish07');
    setCopiedText(true);
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.upperViewHolder}>
        <Text style={styles.headerText}>{string.headerText}</Text>
        <Text style={styles.subHeader}>{string.subHeaderText}</Text>
        <Text style={styles.subHeader2}>{string.subHeaderText2}</Text>
      </View>
      <LottieView
        source={require('../../../assets/animation/Refer.json')}
        resizeMode="cover"
        style={styles.icon}
        autoPlay={true}
        loop
      />
      {/* Referral Link */}
      <View style={styles.linkHolder}>
        <Text style={styles.subHeader}>{string.referralLinkText}</Text>
        <Text style={styles.subHeader2}>{string.copyLinkText}</Text>
        <View style={styles.link}>
          <Text style={styles.linkText}>https://aggrobuddy.com/ashish07</Text>
          <TouchableOpacity onPress={copyReferralLink}>
            <Feather
              name="copy"
              size={responsive(25)}
              color={AppColor.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeader2}>
          {copiedText ? 'Linked Copied successfully' : string.tapToCopyText}
        </Text>
      </View>
      {/* Invite by Social Media Link */}
      <View style={styles.upperViewHolder}>
        <Text style={styles.headerText}>{string.inviteByText}</Text>
        <View style={styles.socialIcon}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <MaterialIcons
              name="facebook"
              size={responsive(35)}
              color={AppColor.primary}
            />
            <Text style={styles.subHeader}>{string.facebookText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <MaterialIcons
              name="telegram"
              size={responsive(35)}
              color={AppColor.primary}
            />
            <Text style={styles.subHeader}>{string.telegramText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Fontisto
              name="whatsapp"
              size={responsive(35)}
              color={AppColor.light_Green}
            />
            <Text style={styles.subHeader}>{string.whatsappText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  upperViewHolder: {
    alignItems: 'center',
    marginVertical: responsive(10),
    padding: responsive(10),
    gap: responsive(10),
  },
  headerText: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
  subHeader2: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
  icon: {
    width: responsive(150),
    height: responsive(200),
    alignSelf: 'center',
  },
  linkHolder: {
    paddingVertical: responsive(20),
    marginVertical: responsive(30),
    backgroundColor: AppColor.light_Grey,
    alignItems: 'center',
    gap: responsive(15),
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: AppColor.white,
    width: '80%',
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    alignItems: 'center',
  },
  linkText: {
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(16),
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    marginVertical: responsive(10),
  },
});
