import React, { memo, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { commonStyles } from '../../styles/CommonStyles';
import TickerItem from './TickerItem';

const Tickers = ({ tickers = [] }) => {
  const renderItem = useCallback(({ item }) => <TickerItem {...item} />, []);

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  return (
    <FlatList
      style={commonStyles.flex}
      contentContainerStyle={styles.flatList}
      data={tickers}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default memo(Tickers);

const styles = StyleSheet.create({
  flatList: {
    padding: 15,
  },
});
