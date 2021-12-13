export const FETCH_EXCHANGES = 'FETCH_EXCHANGES';
export const SAVE_EXCHANGES = 'SAVE_EXCHANGES';

export const saveExchanges = (exchanges) => ({
  type: SAVE_EXCHANGES,
  exchanges,
});
