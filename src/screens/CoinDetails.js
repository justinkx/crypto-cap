import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';
import { StyleSheet } from 'react-native';

import Page from '../components/Page';
import { getCryptoAssets } from '../store/selectors/assetSelector';
import Header from '../components/CoinDetails/Header';
import CandlesChart from '../components/CandlesChart';

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
        <CandlesChart coin={name} containerStyle={styles.chartStyle} />
      </Freeze>
    </Page>
  );
};

export default memo(CoinDetails);

const styles = StyleSheet.create({
  chartStyle: { marginTop: 20 },
});
