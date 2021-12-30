import React, { memo, useCallback } from 'react';
import { StyleSheet, Image, View, FlatList, Text } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
} from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';
import { balanceCoins } from '../../utils/data';
import { CRYPTO_ASSET_SMALL } from '../../utils/api';

const HEIGHT = 75;

const DashboardPriceChange = () => {
  const balanceMarketChanges = useSelector(
    (state) => getCryptoAssets(state)(balanceCoins),
    shallowEqual
  );

  const keyExtractor = useCallback((item) => item?.id, []);

  console.log({ balanceMarketChanges });
  const renderItem = useCallback(({ item }) => <RenderBalance {...item} />, []);
  return (
    <View
      style={[commonStyles.flex, commonStyles.col, commonStyles.spaceBetween]}
    >
      <FlatList
        data={balanceMarketChanges}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const RenderBalance = memo(
  ({
    changePercent24Hr,
    explorer,
    id,
    marketCapUsd,
    name,
    priceUsd,
    volumeUsd24Hr,
    symbol,
  }) => {
    const change24Hr = parseFloat(changePercent24Hr).toFixed(2);
    const isUp = change24Hr > 0;

    return (
      <View
        style={[
          commonStyles.row,
          commonStyles.spaceBetween,
          styles.cardContainer,
        ]}
      >
        <View
          style={[
            styles.boxShadow,
            styles.tickerCard,
            commonStyles.row,
            commonStyles.spaceBetween,
          ]}
        >
          <View style={[styles.leftView, commonStyles.row]}>
            <Image
              style={styles.icon}
              source={{ uri: CRYPTO_ASSET_SMALL(symbol) }}
            />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.priceUsd}>
                ${parseFloat(priceUsd).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.rightView}>
            <Text style={[styles.change24, isUp ? styles.up : styles.down]}>
              {change24Hr}% {isUp ? '▲' : '▼'}
            </Text>
          </View>
        </View>
        <View style={[styles.boxShadow, styles.tickerBuy]}></View>
      </View>
    );
  }
);

export default memo(DashboardPriceChange);

const styles = StyleSheet.create({
  cardContainer: { padding: 10 },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    height: HEIGHT,
    backgroundColor: colors.white,
  },
  tickerCard: { flex: 1, padding: 5, alignItems: 'center' },
  leftView: {},
  rightView: {},
  tickerBuy: { width: HEIGHT, height: HEIGHT, marginLeft: 15 },
  icon: { width: 35, height: 35, marginRight: 5 },
  name: { fontFamily: FONT_MEDIUM, fontSize: 13 },
  priceUsd: { fontFamily: FONT_BOLD, fontSize: 14, paddingTop: 2 },
  change24: { fontSize: 12, fontFamily: FONT_MEDIUM },
  up: { color: colors.success },
  down: { color: colors.error },
});
