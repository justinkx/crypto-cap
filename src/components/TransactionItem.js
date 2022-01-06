import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';

const TransactionItem = ({
  type = 'BID',
  status = 'ORDER_SUCCESSFUL',
  value = 0.004562,
  coin = 'BTC',
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[commonStyles.row, styles.card]}
      ></TouchableOpacity>
    </View>
  );
};

export default memo(TransactionItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
  card: { alignItems: 'center', justifyContent: 'flex-start' },
});
