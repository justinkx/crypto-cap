import React, { memo, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';

import Page from '../components/Page';
import { getCryptoAssets } from '../store/selectors/assetSelector';

const CoinDetails = ({ id }) => {
  const assetDetails = useSelector(
    (state) => getCryptoAssets(state)([id]),
    shallowEqual
  );
  return (
    <Page scroll={false}>
      <Freeze></Freeze>
    </Page>
  );
};

export default memo(CoinDetails);
