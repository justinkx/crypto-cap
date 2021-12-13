import React, { memo, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigation';
import { customFonts, typography } from './utils/Typography';
import store from './store/index';

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
    <Provider store={store}>
      <StatusBar animated backgroundColor="#4c33ae" style="light" />
      <AppNavigator />
    </Provider>
  );
};

export default memo(App);
