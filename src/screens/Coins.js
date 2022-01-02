import React, { memo, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';

import Page from '../components/Page';
import { getCryptoCoins } from '../store/selectors/assetSelector';
import CoinsCard from '../components/CoinsCard';
import { commonStyles } from '../styles/CommonStyles';
import SearchBar from '../components/SearchBar';

const Coins = () => {
  const [searchValue, setSearchValue] = useState('');
  const coins = useSelector(
    (state) => getCryptoCoins(state)(searchValue),
    shallowEqual
  );

  const keyExtractor = useCallback((item) => item?.id, []);

  const renderItem = useCallback(({ item }) => <CoinsCard {...item} />, []);

  return (
    <Page scroll={false}>
      <Freeze>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder={'Search Coin'}
        />
        <FlatList
          data={coins}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={commonStyles.listPadding}
          showsVerticalScrollIndicator={false}
        />
      </Freeze>
    </Page>
  );
};

export default memo(Coins);
