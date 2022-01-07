import React, { memo, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';

import { getCryptoExchanges } from '../store/selectors/exchangeSelector';
import Page from '../components/Page';
import { commonStyles } from '../styles/CommonStyles';
import SearchBar from '../components/SearchBar';
import ExchangeCard from '../components/ExchangeCard';

const Exchanges = () => {
  const [searchValue, setSearchValue] = useState('');

  const exchanges = useSelector(
    (state) => getCryptoExchanges(state)(searchValue),
    shallowEqual
  );

  const keyExtractor = useCallback((item) => item?.id, []);

  const renderItem = useCallback(({ item }) => <ExchangeCard {...item} />, []);

  return (
    <Page scroll={false}>
      <Freeze>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder={'Search Exchange'}
        />
        <FlatList
          style={commonStyles.flex}
          data={exchanges}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={commonStyles.listPadding}
          initialNumToRender={10}
          removeClippedSubviews
        />
      </Freeze>
    </Page>
  );
};

export default memo(Exchanges);
