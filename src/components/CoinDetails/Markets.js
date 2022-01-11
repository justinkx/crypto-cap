import React, { memo, useCallback } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import { commonStyles, colors } from '../../styles/CommonStyles';
import TickerItem from './TickerItem';
import { listEmptyComponent } from '../../utils/helpers';

const Markets = ({ tickers = [] }) => {
  const renderItem = useCallback(({ item }) => <TickerItem {...item} />, []);

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  return (
    <View style={commonStyles.flex}>
      <Text style={[styles.title, commonStyles.fontBold]}>Markets</Text>
      <FlatList
        data={tickers}
        style={commonStyles.flex}
        contentContainerStyle={styles.flatList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};

export default memo(Markets);

const styles = StyleSheet.create({
  flatList: {
    padding: 15,
  },
  title: {
    fontSize: 17,
    marginVertical: 20,
    marginHorizontal: 15,
    color: colors.white,
  },
});
