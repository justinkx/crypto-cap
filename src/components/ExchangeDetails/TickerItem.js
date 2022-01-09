import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  commonStyles,
  colors,
  FONT_SEMI_BOLD,
  FONT_BOLD,
} from '../../styles/CommonStyles';
import { NumbFormat } from '../../utils/helpers';

const TRUST_WIDTH = 8;

const TickerItem = ({
  base,
  target,
  last,
  volume,
  bid_ask_spread_percentage,
  trust_score,
}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[commonStyles.row, commonStyles.center, styles.button]}
      >
        <Text style={[styles.pair, commonStyles.fontBold]}>
          {base} / {target}
        </Text>
        <View style={[styles.detailView, commonStyles.columnFlexEnd]}>
          <Text style={styles.title}>Price</Text>
          <Text style={styles.value}>{last}</Text>
        </View>
        <View style={[styles.detailView, commonStyles.columnFlexEnd]}>
          <Text style={styles.title}>Volume</Text>
          <Text style={styles.value}>
            {NumbFormat({ number: parseFloat(volume).toFixed(2) })}
          </Text>
        </View>
        <View style={[styles.detailView, commonStyles.columnFlexEnd]}>
          <Text style={styles.title}>Spread</Text>
          <Text style={styles.value}>
            {parseFloat(bid_ask_spread_percentage).toFixed(2)} {' %'}
          </Text>
        </View>
        <View style={[styles.trustScore, commonStyles.columnFlexEnd]}>
          <View
            style={[
              styles.trust,
              { backgroundColor: trust_score || colors.errorTint },
            ]}
          />
        </View>
      </TouchableOpacity>
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
  pair: {
    fontSize: 12,
    color: colors.primary,
    width: '30%',
  },
  title: {
    color: colors.primaryFade,
    fontSize: 11,
    fontFamily: FONT_SEMI_BOLD,
  },
  value: {
    color: colors.black,
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
  detailView: {
    width: '20%',
  },
  trustScore: {
    width: '10%',
  },
  trust: {
    width: TRUST_WIDTH,
    height: TRUST_WIDTH,
    borderRadius: TRUST_WIDTH / 2,
  },
});
