import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  colors,
  commonStyles,
  FONT_OUTFIT_BOLD,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';

const TotalBalance = () => {
  return (
    <View>
      <Text
        style={[
          commonStyles.primaryTintColor,
          styles.title,
          commonStyles.fontMedium,
        ]}
      >
        Total Balance
      </Text>
      <Text style={[commonStyles.whiteColor, styles.balance]}>
        <Text style={[commonStyles.primaryTintColor, commonStyles.fontBold]}>
          $
        </Text>
        {' 90,659'}
        <Text style={[commonStyles.primaryTintColor, commonStyles.fontBold]}>
          .55
        </Text>
      </Text>
      <Text style={[commonStyles.whiteColor, styles.btcEquivalent]}>
        2.001234998 <Text style={commonStyles.primaryTintColor}>BTC</Text>
      </Text>
    </View>
  );
};

export default memo(TotalBalance);

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
  },
  balance: {
    fontSize: 26,
    fontFamily: FONT_OUTFIT_BOLD,
    paddingBottom: 4,
  },
  btcEquivalent: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 18,
  },
});
