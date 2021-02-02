import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../assets/Colors';
import {RFV} from '../Constants';
import TinyHeading from './TinyHeading';
const Date = ({title, date}) => {
  return (
    <View>
      <TinyHeading title={title} />
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: RFV(12),
          color: Colors.darkBlue,
        }}>
        {date}
      </Text>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({});
