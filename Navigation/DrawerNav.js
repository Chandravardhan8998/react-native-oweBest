import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNav} from './TabNav';
const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DashboardDrawer"
        component={TabNav}
        options={() => ({
          drawerLabel: 'Dashboard',
        })}
      />
    </Drawer.Navigator>
  );
};
