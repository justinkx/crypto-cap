import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';
import _pick from 'lodash/pick';

export const marketReducer = (state) => state.markets;

export const getCryptoMarkets = createSelector(marketReducer, (markets) =>
  memoizeOne((coins = []) => _pick(markets, coins))
);
