import React from 'react';
import { enableScreens } from 'react-native-screens';
import { enableFreeze } from 'react-native-screens';

import Entry from './src/index';
enableScreens(true);
enableFreeze(true);

export default function App() {
  return <Entry />;
}
