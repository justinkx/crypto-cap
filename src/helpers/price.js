import _find from 'lodash/find';
import _toUpper from 'lodash/toUpper';
import memoizeOne from 'memoize-one';

import store from '../store/index';
import { getAllCryptoAssets } from '../store/selectors/assetSelector';

export const getCurrentUsdPrice = (symbol, price = 0) => {
  const ticker = getTicker(symbol) || {};
  const { priceUsd = 0 } = ticker;
  return parseFloat(price * parseFloat(priceUsd)).toFixed(2);
};

export const getTicker = memoizeOne((symbol) => {
  const state = store.getState();
  const assets = getAllCryptoAssets(state) || [];
  const ticker = _find(assets, { symbol: _toUpper(symbol) });
  return ticker;
});
