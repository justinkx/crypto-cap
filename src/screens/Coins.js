import React, { memo } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import Page from '../components/Page';

const Coins = () => {
  return <Page scroll={false}></Page>;
};

export default memo(Coins);

const styles = StyleSheet.create({});
