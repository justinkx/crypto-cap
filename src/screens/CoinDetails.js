import React, { memo, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';

import Page from '../components/Page';

const CoinDetails = ({ id }) => {
  return (
    <Page scroll={false}>
      <Freeze></Freeze>
    </Page>
  );
};

export default memo(CoinDetails);
