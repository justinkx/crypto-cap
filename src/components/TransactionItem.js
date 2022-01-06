import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getTime, format } from 'date-fns';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';
import {
  ORDER_SUCCESSFUL,
  ORDER_PENDING,
  ORDER_REJECTED,
  BID,
  ASK,
} from '../utils/constants';

const TransactionIcon = {
  [BID]: { label: 'arrow-up-circle-sharp', color: colors.success },
  [ASK]: { label: 'arrow-down-circle-sharp', color: colors.error },
};

const TransactionStatus = {
  [ORDER_SUCCESSFUL]: { label: 'Successful', color: colors.success },
  [ORDER_PENDING]: { label: 'Pending', color: colors.exchange },
  [ORDER_REJECTED]: { label: 'Rejected', color: colors.error },
};

const TransactionDirection = {
  [BID]: '+',
  [ASK]: '-',
};
const TransactionItem = ({
  type = 'BID',
  status = 'ORDER_SUCCESSFUL',
  value = 0.004562,
  coin = 'BTC',
  date = getTime(new Date()),
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          commonStyles.row,
          commonStyles.center,
          commonStyles.spaceBetween,
        ]}
      >
        <View
          style={[commonStyles.row, commonStyles.center, styles.statusView]}
        >
          <Ionicons
            name={TransactionIcon[type].label}
            size={30}
            color={TransactionIcon[type].color}
          />
          <View style={commonStyles.page}>
            <Text
              style={[
                styles.status,
                { color: TransactionStatus[status].color },
              ]}
            >
              {TransactionStatus[status].label}
            </Text>
            <Text style={styles.time}>{format(date, 'do MMM hh:mm a')}</Text>
          </View>
        </View>
        <View style={styles.priceView}>
          <Text
            style={[styles.value, { color: TransactionStatus[status].color }]}
          >
            {TransactionDirection[type]} {value} {coin}
          </Text>
          <Text style={styles.priceUsd}> USD</Text>
        </View>
      </TouchableOpacity>
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
  time: { color: colors.primaryFade, fontSize: 11, fontFamily: FONT_SEMI_BOLD },
  status: { fontFamily: FONT_BOLD, fontSize: 15, paddingBottom: 5 },
  statusView: { width: '45%' },
  value: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    paddingBottom: 5,
  },
  priceUsd: { color: colors.black, fontSize: 13, fontFamily: FONT_SEMI_BOLD },
  priceView: { alignItems: 'flex-end' },
});
