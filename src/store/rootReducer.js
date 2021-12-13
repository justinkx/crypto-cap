import { combineReducers } from 'redux';

import assetReducer from './reducers/assetReducer';
import exchangeReducer from './reducers/exchangeReducer';
import marketsReducer from './reducers/marketsReducer';

const rootReducer = combineReducers({
  assets: assetReducer,
  exchanges: exchangeReducer,
  markets: marketsReducer,
});

export default rootReducer;
