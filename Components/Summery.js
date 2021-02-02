import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {Colors} from '../assets/Colors';
import {RFV} from '../Constants';

const Summery = () => {
  return (
    <View style={styles.summery}>
      <View style={styles.image}>
        <Image
          source={require('../assets/images/profile.jpg')}
          style={{height: RFV(75), width: RFV(75), borderRadius: RFV(50)}}
        />
        <View style={styles.info}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: RFV(22),
              color: '#fff',
            }}>
            Keep Improving
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: RFV(16),
              color: '#fff',
            }}>
            Your current score.
          </Text>
        </View>
      </View>
      <View style={styles.graph}>
        <ProgressCircle
          percent={20}
          radius={RFV(42)}
          borderWidth={RFV(8)}
          color={Colors.blue}
          shadowColor="#fff"
          bgColor={Colors.orange}>
          <Text
            style={{
              fontSize: RFV(20),
              color: '#fff',
              fontFamily: 'Poppins-Regular',
            }}>
            {'20%'}
          </Text>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default Summery;

const styles = StyleSheet.create({
  summery: {
    borderRadius: RFV(10),
    width: Dimensions.get('screen').width - 20,
    height: RFV(110),
    backgroundColor: Colors.orange,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: RFV(10),
    paddingVertical: RFV(25),
  },
  image: {
    flex: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  graph: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
