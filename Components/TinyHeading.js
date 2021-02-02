import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../assets/Colors';
import {RFV} from '../Constants';

const TinyHeading = ({title}) => {
  return (
    <Text
      style={{
        fontFamily: 'Poppins-Light',
        fontSize: RFV(13),
        color: Colors.grayBlue,
      }}>
      {title}
    </Text>
  );
};

export default TinyHeading;

const styles = StyleSheet.create({});
