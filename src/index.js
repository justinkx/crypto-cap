import React, { memo, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AppNavigator from './navigation/AppNavigation';
import { customFonts, typography } from './utils/Typography';

const App = () => {
  useEffect(() => {
    async function loadFontsAsync() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(customFonts);
      typography();
      await SplashScreen.hideAsync();
    }

    loadFontsAsync();
  }, []);

  return (
    <>
      <StatusBar animated backgroundColor="#4c33ae" style="light" />
      <AppNavigator />
    </>
  );
};

export default memo(App);
