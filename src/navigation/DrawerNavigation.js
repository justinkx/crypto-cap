import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {
  DASHBOARD_SCREEN,
  COINS_STACK,
  TRANSACTIONS_SCREEN,
  EXCHANGE_SCREEN,
  BUY_SELL_SCREEN,
  COINS_SCREEN,
  COIN_DETAILS_SCREEN,
} from './NavConstants';
import DashBoard from '../screens/DashBoard';
import Transactions from '../screens/Transactions';
import Exchanges from '../screens/Exchanges';
import BuySell from '../screens/BuySell';
import Coins from '../screens/Coins';
import CoinDetails from '../screens/CoinDetails';

import DrawerContent from './DrawerContent';
import { FONT_SEMI_BOLD, colors } from '../styles/CommonStyles';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CoinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={COINS_SCREEN} component={Coins} />
      <Stack.Screen name={COIN_DETAILS_SCREEN} component={CoinDetails} />
    </Stack.Navigator>
  );
}
function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: { color: colors.white, fontFamily: FONT_SEMI_BOLD },
        headerTintColor: colors.white,
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
        name={COINS_STACK}
        component={CoinStack}
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
