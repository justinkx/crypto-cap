import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { DEFAULT_FONT } from '../styles/CommonStyles';

export const customFonts = {
  MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
  MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
  MontserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  OutfitRegular: require('../../assets/fonts/Outfit-Regular.ttf'),
  OutfitBold: require('../../assets/fonts/Outfit-Bold.ttf'),
};

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: DEFAULT_FONT,
  },
});
