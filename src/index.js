import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './Navigation/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor="#4c33ae" style="light" />
      <AppNavigator />
    </>
  );
};

export default memo(App);
