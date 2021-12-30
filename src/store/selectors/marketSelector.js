import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';
import _pick from 'lodash/pick';
import _values from 'lodash/values';

export const marketReducer = (state) => state.markets;

export const getCryptoMarkets = createSelector(marketReducer, (markets) =>
  memoizeOne((coins = []) => _values(_pick(markets, coins)))
);
