import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DASHBOARD_SCREEN,
  TRANSACTIONS_SCREEN,
  EXCHANGE_SCREEN,
} from './NavConstants';
import DashBoard from '../Screens/DashBoard';
import Transactions from '../Screens/Transactions';
import Exchange from '../Screens/Exchange';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={DASHBOARD_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={DASHBOARD_SCREEN} component={DashBoard} />
      <Drawer.Screen name={EXCHANGE_SCREEN} component={Exchange} />
      <Drawer.Screen name={TRANSACTIONS_SCREEN} component={Transactions} />
    </Drawer.Navigator>
  );
}

export default memo(DrawerNavigation);
