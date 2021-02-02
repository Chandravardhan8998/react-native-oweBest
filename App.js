import 'react-native-gesture-handler';

import React from 'react';
import {enableScreens} from 'react-native-screens';
import MainNavigation from './Navigation/MainNavigation';
enableScreens();
const App = () => {
  return <MainNavigation />;
};
export default App;
