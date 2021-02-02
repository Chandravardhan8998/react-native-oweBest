import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNav} from './StackNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';
import {Colors} from '../assets/Colors';
import {RFV} from '../Constants';
const BottomTab = createBottomTabNavigator();

const TextBottom = ({title, color}) => (
  <Text
    style={{
      fontFamily: 'Poppins-Regular',
      fontSize: RFV(13),
      paddingBottom: RFV(2),
      color: color,
    }}>
    {title}
  </Text>
);
const IonIcon = ({focused, name}) => (
  <Ionicons
    style={{paddingTop: RFV(2)}}
    color={focused ? Colors.offBlue : Colors.grayBlue}
    name={name}
    size={RFV(18)}
  />
);
const FoAIcon = ({focused, name}) => (
  <FontAwesome
    style={{paddingTop: RFV(2)}}
    color={focused ? Colors.offBlue : Colors.grayBlue}
    name={name}
    size={RFV(18)}
  />
);
export const TabNav = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: {height: RFV(60)},
      }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <IonIcon focused={focused} name="ios-home" />
          ),
          tabBarLabel: ({focused}) => (
            <TextBottom
              title="Dashboard"
              color={focused ? Colors.grayBlue : Colors.grayBlue}
            />
          ),
        }}
        name="Dashboard"
        component={StackNav}
      />
      <BottomTab.Screen
        name="Courses"
        component={StackNav}
        options={{
          tabBarIcon: ({focused}) => (
            <FoAIcon focused={focused} name="graduation-cap" />
          ),
          tabBarLabel: ({focused}) => (
            <TextBottom
              title="Courses"
              color={focused ? Colors.grayBlue : Colors.grayBlue}
            />
          ),
        }}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => <FoAIcon focused={focused} name="star" />,
          tabBarLabel: ({focused}) => (
            <TextBottom
              title="Progress Tracker"
              color={focused ? Colors.grayBlue : Colors.grayBlue}
            />
          ),
        }}
        name="Progress Tracker"
        component={StackNav}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <IonIcon focused={focused} name="person-sharp" />
          ),
          tabBarLabel: ({focused}) => (
            <TextBottom
              title="Profile"
              color={focused ? Colors.grayBlue : Colors.grayBlue}
            />
          ),
        }}
        name="Profile"
        component={StackNav}
      />
    </BottomTab.Navigator>
  );
};
