import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

import { commonStyles, colors } from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';
import { balanceCoins } from '../../utils/data';

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
    baseId,
    baseSymbol,
    exchangeId,
    percentExchangeVolume,
    priceQuote,
    priceUsd,
    quoteId,
    quoteSymbol,
    rank,
    tradesCount24Hr,
    updated,
    volumeUsd24Hr,
  }) => {
    return (
      <View
        style={[
          commonStyles.row,
          commonStyles.spaceBetween,
          styles.cardContainer,
        ]}
      >
        <View style={[styles.boxShadow, styles.tickerCard]}></View>
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    height: 70,
    backgroundColor: colors.white,
  },
  tickerCard: { width: '80%' },
  tickerBuy: { width: '15%' },
});
