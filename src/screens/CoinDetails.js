import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';
import { StyleSheet } from 'react-native';

import Page from '../components/Page';
import { getCryptoAssets } from '../store/selectors/assetSelector';
import Header from '../components/CoinDetails/Header';
import CandlesChart from '../components/CandlesChart';
import { useAfterInteractions } from '../hoc/useAfterInteractions';

const CoinDetails = ({ route }) => {
  const { shouldRender } = useAfterInteractions();

  const [
    {
      name = '',
      symbol = '',
      current_price,
      market_cap_rank,
      total_volume,
      market_cap,
      id,
    },
  ] = useSelector(
    (state) => getCryptoAssets(state)([route?.params?.id]),
    shallowEqual
  );

  return (
    <Page scroll={false}>
      <Freeze>
        {shouldRender && (
          <>
            <Header
              name={name}
              symbol={symbol}
              current_price={current_price}
              market_cap_rank={market_cap_rank}
              total_volume={total_volume}
              market_cap={market_cap}
            />
            <CandlesChart coin={id} containerStyle={styles.chartStyle} />
          </>
        )}
      </Freeze>
    </Page>
  );
};

export default memo(CoinDetails);

const styles = StyleSheet.create({
  chartStyle: { marginTop: 20 },
});
