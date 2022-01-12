import _map from 'lodash/map';
import _toLower from 'lodash/toLower';
import _take from 'lodash/take';

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
  {
    token: 'SOL',
    name: 'Solana',
    balance: 2.225,
  },
  {
    token: 'ADA',
    name: 'Cardano',
    balance: 95.18334,
  },
  {
    token: 'DOGE',
    name: 'Dogecoin',
    balance: 1344.9844,
  },
];

export const allBalanceCoins = _map(balance, (item) => _toLower(item.name));

export const balanceCoins = _map(_take(balance, 3), (item) =>
  _toLower(item.name)
);

export const transactions = [
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 0.004562,
    coin: 'BTC',
    date: 1641491777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'ETH',
    value: 0.1134,
    date: 1641491723000,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.104562,
    date: 1641221777000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 11.19,
    coin: 'ADA',
    date: 1641431777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'USDT',
    value: 1.112,
    date: 1641491456000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 0.404562,
    coin: 'BTC',
    date: 1642391777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'SHIB',
    value: 1.1134,
    date: 1641491887000,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.1104562,
    date: 1641491447000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 19.19,
    coin: 'ADA',
    date: 1641455777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'USDT',
    value: 2.112,
    date: 1641422777000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 1.3342,
    coin: 'IOTA',
    date: 1642291117000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'LTC',
    value: 0.009845,
    date: 1611491777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.104562,
    date: 1642291567000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 4.19,
    coin: 'EOS',
    date: 1641423777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'ADA',
    value: 1.4467,
    date: 1601491764000,
  },
  //
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.104562,
    date: 1641497877000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 11.19,
    coin: 'ADA',
    date: 1641491827000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'UNI',
    value: 1.112,
    date: 1641661777000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 0.404562,
    coin: 'BTC',
    date: 1611491897000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'ETC',
    value: 1.1134,
    date: 1611491770000,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'SOL',
    value: 0.1104562,
    date: 1621491007000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 19.19,
    coin: 'LINK',
    date: 1621441777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'USDT',
    value: 2.112,
    date: 1641771777000,
  },
  {
    type: 'BID',
    status: 'ORDER_SUCCESSFUL',
    value: 1.3342,
    coin: 'XEM',
    date: 1641497777000,
  },
  {
    type: 'ASK',
    status: 'ORDER_CANCELLED',
    coin: 'SHIB',
    value: 0.009845,
    date: 1641491766000,
  },
  {
    type: 'ASK',
    status: 'ORDER_PENDING',
    coin: 'MATIC',
    value: 0.104562,
    date: 1541491777000,
  },
];
