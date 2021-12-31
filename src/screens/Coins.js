import React, { memo, useState } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

import Page from '../components/Page';
import { getCryptoCoins } from '../store/selectors/assetSelector';

const Coins = () => {
  const [searchValue, setSearchValue] = useState('');
  const coins = useSelector((state) => getCryptoCoins(state)(searchValue));
  return <Page scroll={false}></Page>;
};

export default memo(Coins);

const styles = StyleSheet.create({});
