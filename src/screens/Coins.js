import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import Page from '../components/Page';
import { getCryptoCoins } from '../store/selectors/assetSelector';
import CoinsCard from '../components/CoinsCard';
import { commonStyles } from '../styles/CommonStyles';

const Coins = () => {
  const isFocused = useIsFocused();
  const [searchValue, setSearchValue] = useState('');
  const coins = useSelector(
    (state) => getCryptoCoins(state)(searchValue),
    shallowEqual
  );

  const keyExtractor = useCallback((item) => item?.id, []);

  const renderItem = useCallback(
    ({ item }) => <CoinsCard {...item} isFocused={isFocused} />,
    [isFocused]
  );

  return (
    <Page scroll={false}>
      <FlatList
        data={coins}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={commonStyles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </Page>
  );
};

export default memo(Coins);

const styles = StyleSheet.create({});
