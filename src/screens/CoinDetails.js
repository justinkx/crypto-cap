import React, { memo, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';

import Page from '../components/Page';
import { getCryptoAssets } from '../store/selectors/assetSelector';
import Header from '../components/CoinDetails/Header';

const CoinDetails = ({ route }) => {
  const [
    { name = '', symbol = '', priceUsd, rank, volumeUsd24Hr, marketCapUsd },
  ] = useSelector(
    (state) => getCryptoAssets(state)([route?.params?.id]),
    shallowEqual
  );
  return (
    <Page scroll>
      <Freeze>
        <Header
          name={name}
          symbol={symbol}
          priceUsd={priceUsd}
          rank={rank}
          volumeUsd24Hr={volumeUsd24Hr}
          marketCapUsd={marketCapUsd}
        />
      </Freeze>
    </Page>
  );
};

export default memo(CoinDetails);
