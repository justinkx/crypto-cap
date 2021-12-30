import _toLower from 'lodash/toLower';

export const CRYPTO_ASSETS = 'https://api.coincap.io/v2/assets';
export const CRYPTO_EXCHANGES = 'https://api.coincap.io/v2/exchanges';
export const CRYPTO_MARKETS = 'https://api.coincap.io/v2/markets';

export const CRYPTO_ASSET_SMALL = (icon) =>
  `https://assets.coincap.io/assets/icons/${_toLower(icon)}@2x.png`;
