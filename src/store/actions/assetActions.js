export const GET_ASSETS = 'GET_ASSETS';
export const SAVE_ASSETS = 'SAVE_ASSETS';
export const UPDATE_PRICES = 'UPDATE_PRICES';

export const getAssets = () => ({ type: GET_ASSETS });
export const saveAssets = (assets) => ({ type: SAVE_ASSETS, assets });
export const updatePrices = (prices) => ({ type: UPDATE_PRICES, prices });
