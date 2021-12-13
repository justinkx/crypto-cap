import { combineReducers } from 'redux';

import assetReducer from './reducers/assetReducer';

const rootReducer = combineReducers({
  assets: assetReducer,
});

export default rootReducer;
