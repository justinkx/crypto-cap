import React, { memo } from 'react';

import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import DrawerNavigation from './Navigation/DrawerNavigation';

const App = () => {
  return (
    <>
      <StatusBar translucent style="auto" />
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {() => <DrawerNavigation />}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    </>
  );
};

export default memo(App);
