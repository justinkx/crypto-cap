import React from 'react';
import { enableScreens } from 'react-native-screens';

import Entry from './src/index';
enableScreens(true);

export default function App() {
  return <Entry />;
}
