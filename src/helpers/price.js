import _find from 'lodash/find';
import _toLower from 'lodash/toLower';
import memoizeOne from 'memoize-one';

import store from '../store/index';
import { getAllCryptoAssets } from '../store/selectors/assetSelector';

export const getCurrentUsdPrice = (symbol, price = 0) => {
  const ticker = getTicker(symbol) || {};
  const { current_price = 0 } = ticker;
  return parseFloat(price * parseFloat(current_price)).toFixed(2);
};

export const getTicker = memoizeOne((symbol) => {
  const state = store.getState();
  const assets = getAllCryptoAssets(state) || [];
  const ticker = _find(assets, { symbol: _toLower(symbol) });
  return ticker;
});
