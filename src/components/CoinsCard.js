import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import _isEqual from 'react-fast-compare';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';
import { NumbFormat } from '../utils/helpers';
import AssetIcon from './AssetIcon';
import PriceDirection from './PriceDirection';

const CoinsCard = ({
  changePercent24Hr,
  marketCapUsd,
  name,
  priceUsd,
  rank,
  symbol,
}) => {
  const change24Hr = parseFloat(changePercent24Hr).toFixed(2);
  const isUp = change24Hr > 0;
  return (
    <View style={[styles.container, commonStyles.boxShadow]}>
      <TouchableOpacity style={[commonStyles.row, styles.card]}>
        <View style={[commonStyles.row, styles.nameView]}>
          <Text style={styles.index}>{rank}</Text>
          <AssetIcon symbol={symbol} iconStyle={styles.icon} />
          <View style={styles.symbolView}>
            <Text
              textBreakStrategy={'highQuality'}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.name}
            >
              {name}
            </Text>
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceUsd}>
            <Text style={styles.price}>Price: </Text>$
            {parseFloat(priceUsd).toFixed(2)}
            <PriceDirection price={parseFloat(priceUsd).toFixed(2)} />
          </Text>
          <Text style={styles.marketCapUsd}>
            <Text style={styles.marketCap}>Market Cap: </Text>$
            {NumbFormat({ number: marketCapUsd })}
          </Text>
        </View>
        <View style={styles.priceChangeView}>
          <Text style={[styles.change24, isUp ? styles.up : styles.down]}>
            {change24Hr}% {isUp ? '▲' : '▼'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(
  CoinsCard,
  (prevProps, nextProps) =>
    !nextProps.isFocused || _isEqual(nextProps, prevProps)
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  card: { alignItems: 'center', justifyContent: 'flex-start' },
  icon: { width: 35, height: 35, marginHorizontal: 5 },
  change24: { fontSize: 12, fontFamily: FONT_MEDIUM },
  up: { color: colors.success },
  down: { color: colors.error },
  index: { fontFamily: FONT_BOLD, color: colors.black, fontSize: 10 },
  nameView: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceView: { width: '35%' },
  priceChangeView: { width: '15%', alignItems: 'flex-end' },
  name: {
    fontFamily: FONT_BOLD,
    color: colors.primary,
    fontSize: 14,
  },
  symbolView: { flex: 1, paddingRight: 5 },
  symbol: {
    fontFamily: FONT_SEMI_BOLD,
    color: colors.primaryFade,
    fontSize: 13,
  },
  price: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 12,
    opacity: 0.5,
  },
  priceUsd: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 13,
  },
  marketCapUsd: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 10,
    opacity: 0.5,
    paddingTop: 4,
  },
  marketCap: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 11,
  },
});
