import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DASHBOARD_SCREEN,
  TRANSACTIONS_SCREEN,
  EXCHANGE_SCREEN,
  BUY_SELL_SCREEN,
} from './NavConstants';
import DashBoard from '../screens/DashBoard';
import Transactions from '../screens/Transactions';
import Exchange from '../screens/Exchange';
import BuySell from '../screens/BuySell';

import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' },
        headerTitleStyle: { color: 'white' },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{ title: 'Dashboard' }}
        name={DASHBOARD_SCREEN}
        component={DashBoard}
      />
      <Drawer.Screen
        options={{ title: 'Exchange' }}
        name={EXCHANGE_SCREEN}
        component={Exchange}
      />
      <Drawer.Screen
        options={{ title: 'Buy / Sell' }}
        name={BUY_SELL_SCREEN}
        component={BuySell}
      />
      <Drawer.Screen
        options={{ title: 'Transactions' }}
        name={TRANSACTIONS_SCREEN}
        component={Transactions}
      />
    </Drawer.Navigator>
  );
}

export default memo(DrawerNavigation);
