import React, { memo, useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import DrawerNavigator from './DrawerNavigation';

const AppNavigator = () => {
  const appTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
      },
    }),
    []
  );
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ImageBackground
        source={require('../../assets/crypto-cap-bg.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <NavigationContainer theme={appTheme}>
          <DrawerNavigator />
        </NavigationContainer>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default memo(AppNavigator);
