/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import {Dimensions, Text} from 'react-native';
import {Colors} from '../assets/Colors';
import Feather from 'react-native-vector-icons/Feather';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {RFV} from '../Constants';
const Stack = createStackNavigator();
import LinearGradient from 'react-native-linear-gradient';

const GradientHeader = ({children, style}) => {
  return (
    <LinearGradient
      start={{x: 0.1, y: 0.00001}}
      end={{x: 0.1, y: 0.9}}
      locations={[0.1, 0.9]}
      style={{
        height: RFV(100),
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      colors={['#4d47ff', '#9759c4']}>
      {children}
    </LinearGradient>
  );
};

export function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'push',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        component={Home}
        name="Dashboard"
        options={({navigation}) => {
          return {
            headerLeft: () => (
              <Feather
                name="menu"
                size={RFV(28)}
                color="#fff"
                onPress={() => navigation.toggleDrawer()}
                style={{padding: RFV(10), zIndex: 1000}}
              />
            ),
            headerRight: () => (
              <SimpleIcon
                name="bell"
                size={RFV(28)}
                color="#fff"
                style={{padding: RFV(10)}}
              />
            ),
            headerTitle: () => (
              <GradientHeader style={{height: RFV(100)}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: RFV(26),
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  Dashboard
                </Text>
              </GradientHeader>
            ),
            headerTitleAlign: 'center',
            headerStyle: {
              height: RFV(100),
              backgroundColor: Colors.offBlue,
              elevation: 0,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
