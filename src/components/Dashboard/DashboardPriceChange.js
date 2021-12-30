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
      <View>
        <Text> Asset</Text>
      </View>
    );
  }
);

export default memo(DashboardPriceChange);

const styles = StyleSheet.create({});
