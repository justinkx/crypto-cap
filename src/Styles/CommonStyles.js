import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowHMiddle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colHMiddle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});
