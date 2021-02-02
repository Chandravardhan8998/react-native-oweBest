/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '../assets/Colors';
import SubscriptionCard from '../Components/SubscriptionCard';
import Summery from '../Components/Summery';
import TheGraph from '../Components/TheGraph';
import {RFV} from '../Constants';

const Home = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor(Colors.offBlue);
  }, []);
  return (
    ///////////////////
    // RFV ////////////
    ///////////////////

    <View style={styles.view}>
      <Summery />
      <SubscriptionCard />
      <TheGraph />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: RFV(12),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.lightBlue,
  },
});
