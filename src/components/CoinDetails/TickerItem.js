import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  commonStyles,
  colors,
  FONT_SEMI_BOLD,
  FONT_BOLD,
} from '../../styles/CommonStyles';
import { NumbFormat } from '../../utils/helpers';

const TickerItem = ({}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[commonStyles.row, commonStyles.center, styles.button]}
      ></TouchableOpacity>
    </View>
  );
};

export default memo(TickerItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    justifyContent: 'space-between',
  },
});
