import React, { memo, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';

import Page from '../components/Page';
import { getCryptoCoins } from '../store/selectors/assetSelector';
import CoinsCard from '../components/CoinsCard';
import { commonStyles } from '../styles/CommonStyles';
import SearchBar from '../components/SearchBar';
import { useAfterInteractions } from '../hoc/useAfterInteractions';

const Coins = () => {
  const { shouldRender } = useAfterInteractions();

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
        {shouldRender && (
          <>
            <SearchBar
              value={searchValue}
              onChange={setSearchValue}
              placeholder={'Search Coin'}
            />
            <FlatList
              style={commonStyles.flex}
              data={coins}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              contentContainerStyle={commonStyles.listPadding}
              initialNumToRender={10}
              removeClippedSubviews
              bounces
            />
          </>
        )}
      </Freeze>
    </Page>
  );
};

export default memo(Coins);
