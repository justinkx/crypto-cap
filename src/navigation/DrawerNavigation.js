import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DASHBOARD_SCREEN,
  TRANSACTIONS_SCREEN,
  EXCHANGE_SCREEN,
} from './NavConstants';
import DashBoard from '../screens/DashBoard';
import Transactions from '../screens/Transactions';
import Exchange from '../screens/Exchange';

import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={DASHBOARD_SCREEN} component={DashBoard} />
      <Drawer.Screen name={EXCHANGE_SCREEN} component={Exchange} />
      <Drawer.Screen name={TRANSACTIONS_SCREEN} component={Transactions} />
    </Drawer.Navigator>
  );
}

export default memo(DrawerNavigation);
