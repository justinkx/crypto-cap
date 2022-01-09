import React, { memo, useEffect, useState, useCallback } from 'react';
import { Freeze } from 'react-freeze';
import { useSelector, shallowEqual } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Page from '../components/Page';
import { useAfterInteractions } from '../hoc/useAfterInteractions';
import { apiChain } from '../utils/helpers';
import { EXCHANGE_DETAILS, EXCHANGE_VOLUME_CHART } from '../utils/api';
import Header from '../components/ExchangeDetails/Header';
import { getExchanges } from '../store/selectors/exchangeSelector';
import StatusUpdates from '../components/ExchangeDetails/StatusUpdates';
import Tickers from '../components/ExchangeDetails/Tickers';
import { colors, FONT_BOLD } from '../styles/CommonStyles';

const Tab = createMaterialTopTabNavigator();

const ExchangeDetails = ({ route }) => {
  const { id } = route.params;

  const [exchangeData] = useSelector(
    (state) => getExchanges(state)([id]),
    shallowEqual
  );

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

  const { details = {} } = exchangeDetails;

  const renderTickers = useCallback(
    () => <Tickers tickers={details?.tickers || []} />,
    [details]
  );

  return (
    <Page scroll={false}>
      <Freeze>
        {shouldRender && (
          <>
            <Header {...exchangeData} />
            <Tab.Navigator
              screenOptions={{
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontFamily: FONT_BOLD,
                  color: colors.white,
                  textTransform: 'capitalize',
                },
                tabBarStyle: {
                  backgroundColor: 'transparent',
                },
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.exchangeTint,
                tabBarIndicatorStyle: { backgroundColor: colors.white },
                lazy: true,
              }}
            >
              <Tab.Screen
                options={{ title: 'Tickers' }}
                name="Tickers"
                children={renderTickers}
              />
              <Tab.Screen
                options={{ title: 'Status Updates' }}
                name="StatusUpdates"
                component={StatusUpdates}
              />
            </Tab.Navigator>
          </>
        )}
      </Freeze>
    </Page>
  );
};

export default memo(ExchangeDetails);
