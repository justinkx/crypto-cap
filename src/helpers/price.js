import _find from 'lodash/find';
import _toLower from 'lodash/toLower';
import memoizeOne from 'memoize-one';
import _nth from 'lodash/nth';

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

export const calculateBalanceTotals = (_balance = [], _assets = null) => {
  let assets = [];
  if (_assets) {
    assets = _assets;
  } else {
    const state = store.getState();
    assets = getAllCryptoAssets(state) || [];
  }

  let totalUsd = 0;
  for (let i = 0; i < _balance.length; i++) {
    const { balance, token } = _nth(_balance, i);
    const coinTicker = _find(assets, { symbol: _toLower(token) }) || {};
    const { current_price = 0 } = coinTicker;
    totalUsd = balance * current_price + totalUsd;
  }
  return parseFloat(totalUsd).toFixed(2);
};
