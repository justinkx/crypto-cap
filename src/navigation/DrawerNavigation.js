import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DASHBOARD_SCREEN,
  COINS_STACK,
  TRANSACTIONS_SCREEN,
  EXCHANGE_SCREEN,
  BUY_SELL_SCREEN,
  COINS_SCREEN,
  COIN_DETAILS_SCREEN,
  EXCHANGE_DETAILS_SCREEN,
  EXCHANGE_STACK,
} from './NavConstants';
import DashBoard from '../screens/DashBoard';
import Transactions from '../screens/Transactions';
import Exchanges from '../screens/Exchanges';
import BuySell from '../screens/BuySell';
import Coins from '../screens/Coins';
import CoinDetails from '../screens/CoinDetails';
import ExchangeDetails from '../screens/ExchangeDetails';
import HamburgerIcon from '../components/HamburgerIcon';

import DrawerContent from './DrawerContent';
import { colors, FONT_BOLD, isIos } from '../styles/CommonStyles';

const Drawer = createDrawerNavigator();
const NativeStack = createNativeStackNavigator();

const transparentHeader = {
  backgroundColor: 'transparent',
  elevation: 0,
  shadowOpacity: 0,
};
const headerTitleStyle = {
  color: colors.white,
  fontFamily: FONT_BOLD,
  fontSize: 20,
};

const menuHeaderLeftStyle = { marginLeft: 15 };

const titleFromParamsOptions = ({ route }) => ({
  title: route?.params?.title || '',
  headerStyle: transparentHeader,
  headerTintColor: colors.white,
  headerBackTitleVisible: false,
});

const drawerIconOption = {
  headerLeft: ({ focused, size }) => (
    <HamburgerIcon
      size={size}
      focused={focused}
      containerStyle={menuHeaderLeftStyle}
    />
  ),
  headerBackTitleVisible: false,
};

function CoinStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleStyle,
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        animation: isIos ? 'fade' : 'default',
      }}
    >
      <NativeStack.Screen
        options={{
          headerStyle: transparentHeader,
          title: 'Coins',
          headerLeft: (props) => <HamburgerIcon {...props} />,
          headerTintColor: colors.white,
          headerLeftContainerStyle: { justifyContent: 'flex-start' },
          detachPreviousScreen: false,
        }}
        name={COINS_SCREEN}
        component={Coins}
      />
      <NativeStack.Screen
        options={titleFromParamsOptions}
        name={COIN_DETAILS_SCREEN}
        component={CoinDetails}
      />
    </NativeStack.Navigator>
  );
}

function ExchangeStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleStyle,
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        animation: isIos ? 'fade' : 'default',
      }}
    >
      <NativeStack.Screen
        options={{
          headerStyle: transparentHeader,
          title: 'Exchanges',
          headerLeft: (props) => <HamburgerIcon {...props} />,
          headerLeftContainerStyle: { justifyContent: 'flex-start' },
          headerTintColor: colors.white,
        }}
        name={EXCHANGE_SCREEN}
        component={Exchanges}
      />
      <NativeStack.Screen
        options={titleFromParamsOptions}
        name={EXCHANGE_DETAILS_SCREEN}
        component={ExchangeDetails}
      />
    </NativeStack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD_SCREEN}
      screenOptions={{
        headerStyle: transparentHeader,
        headerTitleStyle,
        headerTintColor: colors.white,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: 'gray',
        drawerLabelStyle: { fontFamily: FONT_BOLD },
        drawerActiveBackgroundColor: colors.primaryFade,
        headerTitleAlign: 'center',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      detachInactiveScreens
    >
      <Drawer.Screen
        options={{
          title: 'Dashboard',
          ...drawerIconOption,
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="dashboard"
              size={size}
              color={focused ? colors.white : 'gray'}
            />
          ),
        }}
        name={DASHBOARD_SCREEN}
        component={DashBoard}
      />
      <Drawer.Screen
        options={{
          title: 'Coins',
          headerShown: false,
          ...drawerIconOption,
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="coins"
              size={size}
              color={focused ? colors.white : 'gray'}
            />
          ),
        }}
        name={COINS_STACK}
        component={CoinStack}
      />
      <Drawer.Screen
        options={{
          title: 'Exchanges',
          headerShown: false,
          ...drawerIconOption,
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="bank"
              size={size}
              color={focused ? colors.white : 'gray'}
            />
          ),
        }}
        name={EXCHANGE_STACK}
        component={ExchangeStack}
      />
      <Drawer.Screen
        options={{
          title: 'Buy / Sell',
          ...drawerIconOption,
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="exchange-alt"
              size={size}
              color={focused ? colors.white : 'gray'}
            />
          ),
        }}
        name={BUY_SELL_SCREEN}
        component={BuySell}
      />
      <Drawer.Screen
        options={{
          title: 'Transactions',
          ...drawerIconOption,
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="hands-helping"
              size={size}
              color={focused ? colors.white : 'gray'}
            />
          ),
        }}
        name={TRANSACTIONS_SCREEN}
        component={Transactions}
      />
    </Drawer.Navigator>
  );
}

export default memo(DrawerNavigation);
