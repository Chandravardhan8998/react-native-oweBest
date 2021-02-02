import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {RFV} from '../Constants';

const MyButtons = ({title, onPress, style}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{...styles.button, ...style}}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            textAlignVertical: 'center',
            lineHeight: RFV(20),
            fontSize: RFV(13),
          }}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MyButtons;

const styles = StyleSheet.create({
  button: {
    width: RFV(90),
    height: RFV(32),
    padding: RFV(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFV(3),
    // margin: 5,
  },
});
