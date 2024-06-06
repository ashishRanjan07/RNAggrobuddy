import {
  PanResponder,
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import AppColor from '../constant/AppColor';
import {responsive} from '../constant/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const CustomSwipeButton = ({title,onSwipeSuccess}) => {
  const pan = useRef(new Animated.Value(0)).current;

  const maxSwipeDistance = SCREEN_WIDTH * 0.8 - responsive(30);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        if (gesture.dx >= 0 && gesture.dx <= maxSwipeDistance) {
          pan.setValue(gesture.dx);
        }
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > maxSwipeDistance * 0.9) {
          onSwipeSuccess();
        } else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.swipeContainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.swipeThumb, {transform: [{translateX: pan}]}]}>
        <View style={styles.swipeThumbIcon}>
          <AntDesign
            name="rightcircleo"
            size={responsive(25)}
            color={AppColor.warning}
          />
        </View>

        <Text style={styles.swipeInstruction}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default CustomSwipeButton;

const styles = StyleSheet.create({
  swipeContainer: {
    width: '100%',
    backgroundColor: AppColor.dark_Yellow,
    borderRadius: responsive(30),
    justifyContent: 'center',
    padding: responsive(5),
  },
  swipeThumbIcon: {
    width: responsive(50),
    height: responsive(50),
    borderRadius: 25,
    backgroundColor: AppColor.white,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeThumb: {
    alignItems: 'center',
    gap: responsive(9),
    flexDirection: 'row',
  },
  swipeInstruction: {
    width: '80%',
    //   alignSelf: 'center',
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'OpenSans-Bold',
  },
});
