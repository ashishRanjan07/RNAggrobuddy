import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const CropDoctor = () => {
  const handleCall = () => {
    console.log('Call Clicked');
    Linking.openURL(`tel:+9118001036110`);
  };
  const handleChat = () => {
    console.log('Chat Clicked ');
    const Ph = `+91${6206416452}`;
    let message = encodeURIComponent(
      `Hi there!\n I want to talk related to my product.\n Specifically, I'm interested in the Onion Production.\n How can I learn more or make an inquiry?`,
    );

    const url = `whatsapp://send?phone=${Ph}&text=${message}`;
    Linking.openURL(url).catch(err =>
      console.error('Error opening WhatsApp:', err),
    );
  };
  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity style={styles.viewHolder} onPress={handleCall}>
        <View style={styles.innerView}>
          <MaterialIcons
            name="headset-mic"
            size={responsive(30)}
            color={AppColor.dark_Green}
          />
          <Text style={styles.text}>Call with Agriculture Expert</Text>
        </View>
        <MaterialIcons
          name="chevron-right"
          size={responsive(30)}
          color={AppColor.dark_Green}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewHolder} onPress={handleChat}>
        <View style={styles.innerView}>
          <FontAwesome
            name="whatsapp"
            size={responsive(30)}
            color={AppColor.dark_Green}
          />
          <Text style={styles.text}>Chat with Agriculture Expert</Text>
        </View>
        <MaterialIcons
          name="chevron-right"
          size={responsive(30)}
          color={AppColor.dark_Green}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CropDoctor;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  viewHolder: {
    marginVertical: responsive(10),
    borderWidth: 2,
    width: '95%',
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: responsive(10),
    elevation: responsive(10),
    borderColor: AppColor.white,
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(20),
    width: '70%',
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
});
