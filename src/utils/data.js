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

export const transactions = [
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 0.004562,
    coin: 'BTC',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'ETH',
    value: 0.1134,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.104562,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 11.19,
    coin: 'ADA',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'USDT',
    value: 1.112,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 0.404562,
    coin: 'BTC',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'SHIB',
    value: 1.1134,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.1104562,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 19.19,
    coin: 'ADA',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'USDT',
    value: 2.112,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 1.3342,
    coin: 'IOTA',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'LTC',
    value: 0.009845,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.104562,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 4.19,
    coin: 'EOS',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'ADA',
    value: 1.4467,
  },
  //
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.104562,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 11.19,
    coin: 'ADA',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'UNI',
    value: 1.112,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 0.404562,
    coin: 'BTC',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'ETC',
    value: 1.1134,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.1104562,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 19.19,
    coin: 'LINK',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'USDT',
    value: 2.112,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 1.3342,
    coin: 'XEM',
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'SHIB',
    value: 0.009845,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'MATIC',
    value: 0.104562,
  },
];
