import React, { memo, useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Freeze } from 'react-freeze';
import { StyleSheet } from 'react-native';
import _get from 'lodash/get';
import axios from 'axios';

import Page from '../components/Page';
import { getCryptoAssets } from '../store/selectors/assetSelector';
import Header from '../components/CoinDetails/Header';
import CandlesChart from '../components/CandlesChart';
import { useAfterInteractions } from '../hoc/useAfterInteractions';
import { COIN_DETAILS } from '../utils/api';
import Markets from '../components/CoinDetails/Markets';

const CoinDetails = ({ route }) => {
  const { shouldRender } = useAfterInteractions();
  const [coinDetails, setDetails] = useState({});

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

  useEffect(() => {
    async function init() {
      try {
        const { data: details } = await axios.get(COIN_DETAILS({ coin: id }));
        setDetails(details);
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, [id]);

  const homePage = _get(coinDetails, 'links.homepage', []);
  const tickers = _get(coinDetails, 'tickers', []);
  const [url] = homePage;

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
              url={url}
            />
            <CandlesChart coin={id} containerStyle={styles.chartStyle} />
            <Markets tickers={tickers} />
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
