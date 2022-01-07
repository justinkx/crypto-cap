import React, { memo, useEffect, useState } from 'react';
import { Freeze } from 'react-freeze';
import { StyleSheet } from 'react-native';

import Page from '../components/Page';
import { useAfterInteractions } from '../hoc/useAfterInteractions';
import { apiChain } from '../utils/helpers';
import { EXCHANGE_DETAILS, EXCHANGE_VOLUME_CHART } from '../utils/api';

const ExchangeDetails = ({ route }) => {
  const { id } = route.params;
  const [exchangeDetails, setDetails] = useState({
    details: {},
    volumeChart: [],
  });
  const { shouldRender } = useAfterInteractions();

  useEffect(() => {
    async function getDetails() {
      const [_details, _volumeChart] = await apiChain([
        fetch(EXCHANGE_DETAILS(id)),
        fetch(EXCHANGE_VOLUME_CHART(id)),
      ]);
      setDetails({ details: _details, volumeChart: _volumeChart });
    }

    getDetails();
  }, [id]);
  return (
    <Page scroll>
      <Freeze>{shouldRender && <></>}</Freeze>
    </Page>
  );
};

export default memo(ExchangeDetails);

const styles = StyleSheet.create({});
