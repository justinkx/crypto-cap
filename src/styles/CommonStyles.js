import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const DEFAULT_FONT = 'MontserratRegular';
export const FONT_MEDIUM = 'MontserratMedium';
export const FONT_SEMI_BOLD = 'MontserratSemiBold';
export const FONT_BOLD = 'MontserratBold';
export const FONT_OUTFIT_REGULAR = 'OutfitRegular';
export const FONT_OUTFIT_BOLD = 'OutfitBold';

export const colours = {
  white: '#ffffff',
  black: '#000000',
};
export const commonStyles = StyleSheet.create({
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
  page: {
    paddingHorizontal: 15,
  },
  fontMedium: {
    fontFamily: FONT_MEDIUM,
  },
  fontSemibold: {
    fontFamily: FONT_SEMI_BOLD,
  },
  fontBold: {
    fontFamily: FONT_BOLD,
  },
});
