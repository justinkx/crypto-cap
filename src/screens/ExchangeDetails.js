import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';
import { StyleSheet } from 'react-native';

import Page from '../components/Page';
import { getCryptoAssets } from '../store/selectors/assetSelector';

const ExchangeDetails = () => {
  return (
    <Page scroll>
      <Freeze></Freeze>
    </Page>
  );
};

export default memo(ExchangeDetails);

const styles = StyleSheet.create({});
