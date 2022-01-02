import { createSelector } from 'reselect';
import memoizeOne from 'memoize-one';
import _pick from 'lodash/pick';
import _values from 'lodash/values';
import _filter from 'lodash/filter';
import _toLower from 'lodash/toLower';
import _sortBy from 'lodash/sortBy';

export const assetReducer = (state) => state.assets;

export const getCryptoAssets = createSelector(assetReducer, (assets) =>
  memoizeOne((coins = []) => _values(_pick(assets, coins)))
);

export const getCryptoCoins = createSelector(assetReducer, (assets) =>
  memoizeOne((name = '', sortBy = 'rank') =>
    _sortBy(
      _filter(
        assets,
        (asset) =>
          _toLower(asset.name).includes(_toLower(name)) ||
          _toLower(asset.symbol).includes(_toLower(name))
      ),
      (item) => parseFloat(item[sortBy])
    )
  )
);
