import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

import { commonStyles, colors } from '../../styles/CommonStyles';
import { getCryptoMarkets } from '../../store/selectors/marketSelector';

const DashboardPriceChange = () => {
  const keyExtractor = useCallback((item, index) => index.toString, []);
  const balanceMarketChanges = useSelector((state) =>
    getCryptoMarkets(state)(['bitcoin'])
  );
  console.log('balanceMarketChanges', balanceMarketChanges);
  return (
    <View
      style={[commonStyles.flex, commonStyles.col, commonStyles.spaceBetween]}
    >
      <Text>24hr change</Text>
    </View>
  );
};

export default memo(DashboardPriceChange);

const styles = StyleSheet.create({});
