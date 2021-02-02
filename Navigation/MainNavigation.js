import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNav} from './DrawerNav';

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
