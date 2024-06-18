import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../constant/AppColor';
import {responsive} from '../../constant/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductListModal from './ProductListModal';
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';
import moment from 'moment';
import StateListModal from './StateListModal';
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';

const RateListWebScrapping = () => {
  const [step, setStep] = useState(1);
  const [checkPrice, setPrice] = useState('Price');
  const [shoeProductList, setShowProductList] = useState(false);
  const [showStateList, setShowStateList] = useState(false);
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [stateId, setStateId] = useState('');
  const [stateName, setStateName] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleProductName = item => {
    setProductName(item.name);
    setProductId(item.value);
  };

  const handleStateName = item => {
    setStateName(item.name);
    setStateId(item.value);
  };

  const handleDateChange = date => {
    setDate(moment(date).format('DD-MMM-YYYY'));
    setShowDate(!showDate);
  };

  const handleSubmit = async () => {
    setStep(2);
    const webLink = `https://agmarknet.gov.in/SearchCmmMkt.aspx?Tx_Commodity=${productId}&Tx_State=${stateId}&Tx_District=0&Tx_Market=0&DateFrom=${date}&DateTo=${date}&Fr_Date=${date}&To_Date=${date}&Tx_Trend=0&Tx_CommodityHead=${productName}&Tx_StateHead=${stateName}&Tx_DistrictHead=--Select--&Tx_MarketHead=--Select--`;
    setLink(webLink);
    // fetchData(webLink);
  };
  return (
    <View style={styles.main}>
      {step === 1 ? (
        <ScrollView style={styles.formContainer}>
          <View style={styles.viewHolder}>
            <TextInput
              placeholder="Price"
              placeholderTextColor={AppColor.primary}
              value={checkPrice}
              editable={false}
              style={styles.textInputBox}
            />
            <TouchableOpacity
              style={styles.productListBox}
              onPress={() => setShowProductList(!shoeProductList)}>
              <TextInput
                value={productName}
                editable={false}
                style={styles.text}
                placeholder="Select Product from the list"
                placeholderTextColor={AppColor.primary}
              />
              <AntDesign
                name="caretdown"
                size={responsive(25)}
                color={AppColor.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.productListBox}
              onPress={() => setShowStateList(!showStateList)}>
              <TextInput
                value={stateName}
                editable={false}
                style={styles.text}
                placeholder="Select State from the list"
                placeholderTextColor={AppColor.primary}
              />
              <AntDesign
                name="caretdown"
                size={responsive(25)}
                color={AppColor.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.productListBox}
              onPress={() => setShowDate(!showDate)}>
              <TextInput
                value={date}
                editable={false}
                style={styles.text}
                placeholder="Select Date"
                placeholderTextColor={AppColor.primary}
              />
              <AntDesign
                name="calendar"
                size={responsive(25)}
                color={AppColor.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <ProductListModal
            visible={shoeProductList}
            onClose={() => setShowProductList(!shoeProductList)}
            onConfirm={item => handleProductName(item)} // Correctly pass the selected name
          />
          <StateListModal
            visible={showStateList}
            onClose={() => setShowStateList(!showStateList)}
            onConfirm={item => handleStateName(item)} // Correctly pass the selected name
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={showDate}
            onRequestClose={() => setShowDate(!showDate)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <CalendarPicker
                  selectedStartDate={
                    date ? moment(date, 'DD-MM-YYYY').toDate() : null
                  }
                  onDateChange={handleDateChange}
                  previousTitleStyle={{color: 'black'}}
                  nextTitleStyle={{color: 'black'}}
                />
                <TouchableOpacity
                  onPress={() => setShowDate(!showDate)}
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      ) : (
        <View style={styles.main2}>
        {isLoading && (
            <View style={styles.loaderContainer}>
                <BarIndicator color='white'/>
            </View>
        )}
        <WebView
            source={{
                uri: link
            }}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            style={isLoading ? { display: 'none' } : { flex: 1 }}
        />
    </View>
      )}
    </View>
  );
};

export default RateListWebScrapping;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  formContainer: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  viewHolder: {
    width: '95%',
    alignSelf: 'center',
    gap: responsive(15),
    marginTop: responsive(10),
  },
  textInputBox: {
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(20),
    borderWidth: 2,
    padding: responsive(10),
    borderRadius: responsive(5),
    borderColor: AppColor.primary,
  },
  text: {
    width: '90%',
    fontSize: responsive(20),
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
  },
  productListBox: {
    borderWidth: 2,
    borderColor: AppColor.primary,
    paddingHorizontal: responsive(10),
    borderRadius: responsive(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: responsive(20),
    padding: responsive(35),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: responsive(5),
    elevation: responsive(10),
  },
  closeButton: {
    backgroundColor: AppColor.orange,
    padding: responsive(10),
    borderRadius: responsive(10),
    marginTop: responsive(10),
    paddingHorizontal: responsive(40),
    alignSelf: 'center',
  },
  closeButtonText: {
    color: AppColor.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsive(18),
  },
  touchButton: {
    borderWidth: 2,
    borderColor: AppColor.primary,
    paddingHorizontal: responsive(10),
    borderRadius: responsive(5),
    alignItems: 'center',
    padding: 10,
    backgroundColor: AppColor.primary,
  },
  buttonText: {
    fontSize: responsive(20),
    fontFamily: 'OpenSans-Medium',
    color: AppColor.white,
  },
  main2: {
    flex: 1,
    backgroundColor: AppColor.primary,
},
loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.primary,
},
});
