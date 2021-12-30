import _map from 'lodash/map';
import _toLower from 'lodash/toLower';

export const userData = {
  name: 'Liam Oliver',
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=500&q=50',
};

export const balance = [
  {
    token: 'BTC',
    name: 'Bitcoin',
    balance: 1.125,
    equivalentUsd: 53625.53,
    volume: '91%',
  },
  {
    token: 'ETH',
    name: 'Ethereum',
    balance: 1.567,
    equivalentUsd: 5920.15,
    volume: '4%',
  },
  {
    token: 'AAVE',
    name: 'Aave',
    balance: 27.89,
    equivalentUsd: 6832.42,
    volume: '5%',
  },
];

export const balanceCoins = _map(balance, (item) => _toLower(item.name));
