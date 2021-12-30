import React, { memo, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigation';
import { customFonts, typography } from './utils/Typography';
import store from './store/index';

const App = () => {
  const [loaded] = Font.useFonts(customFonts);

  useEffect(() => {
    async function init() {
      typography();
      await SplashScreen.hideAsync();
    }
    if (loaded) {
      init();
    }
  }, [loaded]);

  return (
    <Provider store={store}>
      <StatusBar animated backgroundColor="#4c33ae" style="light" />
      {loaded && <AppNavigator />}
    </Provider>
  );
};

export default memo(App);
