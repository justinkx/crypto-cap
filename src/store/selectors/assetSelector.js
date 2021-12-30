import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';
import _pick from 'lodash/pick';
import _values from 'lodash/values';

export const assetReducer = (state) => state.assets;

export const getCryptoAssets = createSelector(assetReducer, (assets) =>
  memoizeOne((coins = []) => _values(_pick(assets, coins)))
);
