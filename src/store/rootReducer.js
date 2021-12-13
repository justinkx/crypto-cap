import { combineReducers } from 'redux';

import assetReducer from './reducers/assetReducer';
import exchangeReducer from './reducers/exchangeReducer';

const rootReducer = combineReducers({
  assets: assetReducer,
  exchanges: exchangeReducer,
});

export default rootReducer;
