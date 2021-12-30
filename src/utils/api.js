import _toLower from 'lodash/toLower';

export const CRYPTO_ASSETS = 'https://api.coincap.io/v2/assets';
export const CRYPTO_EXCHANGES = 'https://api.coincap.io/v2/exchanges';
export const CRYPTO_MARKETS = 'https://api.coincap.io/v2/markets';

export const CRYPTO_ASSET_SMALL = (icon) =>
  `https://assets.coincap.io/assets/icons/${_toLower(icon)}@2x.png`;

export const CRYPTO_COIN_24HR_CHANGE = (token) =>
  `https://api.coingecko.com/api/v3/coins/${_toLower(
    token
  )}/market_chart?vs_currency=usd&days=1`;
