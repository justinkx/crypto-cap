import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DASHBOARD_SCREEN,
  TRANSACTIONS_SCREEN,
  EXCHANGE_SCREEN,
  BUY_SELL_SCREEN,
  COINS_SCREEN,
} from './NavConstants';
import DashBoard from '../screens/DashBoard';
import Transactions from '../screens/Transactions';
import Exchanges from '../screens/Exchanges';
import BuySell from '../screens/BuySell';
import Coins from '../screens/Coins';

import DrawerContent from './DrawerContent';
import { FONT_SEMI_BOLD } from '../styles/CommonStyles';
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' },
        headerTitleStyle: { color: 'white', fontFamily: FONT_SEMI_BOLD },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      detachInactiveScreens
    >
      <Drawer.Screen
        options={{ title: 'Dashboard' }}
        name={DASHBOARD_SCREEN}
        component={DashBoard}
      />
      <Drawer.Screen
        options={{ title: 'Coins' }}
        name={COINS_SCREEN}
        component={Coins}
      />
      <Drawer.Screen
        options={{ title: 'Exchanges' }}
        name={EXCHANGE_SCREEN}
        component={Exchanges}
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
