import React, { memo } from 'react';

import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './Navigation/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar translucent style="auto" />
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {() => <AppNavigator />}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    </>
  );
};

export default memo(App);
