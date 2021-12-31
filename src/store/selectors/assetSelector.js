import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';
import _pick from 'lodash/pick';
import _values from 'lodash/values';
import _filter from 'lodash/filter';
import _toLower from 'lodash/toLower';

export const assetReducer = (state) => state.assets;

export const getCryptoAssets = createSelector(assetReducer, (assets) =>
  memoizeOne((coins = []) => _values(_pick(assets, coins)))
);

export const getCryptoCoins = createSelector(assetReducer, (assets) =>
  memoizeOne((name = '') =>
    _filter(assets, (asset) => _toLower(asset.name).includes(_toLower(name)))
  )
);
