import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';

const ExchangeCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          commonStyles.row,
          commonStyles.center,
          commonStyles.spaceBetween,
        ]}
      ></TouchableOpacity>
    </View>
  );
};

export default memo(ExchangeCard);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
});
