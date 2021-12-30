import { StyleSheet, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export const DEFAULT_FONT = 'MontserratRegular';
export const FONT_MEDIUM = 'MontserratMedium';
export const FONT_SEMI_BOLD = 'MontserratSemiBold';
export const FONT_BOLD = 'MontserratBold';
export const FONT_OUTFIT_REGULAR = 'OutfitRegular';
export const FONT_OUTFIT_BOLD = 'OutfitBold';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#4f34b1',
  primaryTint: '#a69aef',
  primaryFade: '#4e4fb1',
  wallet: '#44aff8',
  walletTint: '#7ad2f8',
  exchange: '#f87600',
  exchangeTint: '#fe9e36',
  success: '#02c766',
  error: '#ff5b5a',
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
  col: {
    flexDirection: 'column',
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
  primaryColor: {
    color: colors.primary,
  },
  primaryTintColor: {
    color: colors.primaryTint,
  },
  whiteColor: {
    color: colors.white,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
