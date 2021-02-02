import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../assets/Colors';
import {RFV} from '../Constants';
import Date from './Date';
import MyButtons from './MyButtons';
import TinyHeading from './TinyHeading';

const SubscriptionCard = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: RFV(14),
              color: Colors.darkBlue,
            }}>
            My Subscription
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <MyButtons title="Renew" style={{backgroundColor: Colors.blue}} />
          <MyButtons title="Upgrade" style={{backgroundColor: Colors.orange}} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.secOne}>
          <TinyHeading title="Active Plan" />
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: RFV(17),
              color: Colors.darkBlue,
            }}>
            $100 / Month
          </Text>
        </View>
        <View style={styles.secTwo}>
          <Date date="01 Jan,2020" title="Activation Date" />
          <Date date="02 Fab,2020" title="Expire Date" />
        </View>
      </View>
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    borderRadius: RFV(8),
    padding: RFV(15),
    width: Dimensions.get('screen').width - 20,
    height: RFV(150),
    marginVertical: RFV(15),
    // flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    paddingTop: RFV(10),
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secOne: {
    flex: 8,
    justifyContent: 'center',
  },
  secTwo: {
    marginHorizontal: RFV(10),
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
