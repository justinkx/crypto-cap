import { spawn } from 'redux-saga/effects';

import assetsSaga from './saga/assetsSaga';
import exchangesSaga from './saga/exchangeSaga';
import marketsSaga from './saga/marketsSaga';

export default function* rootSaga() {
  yield spawn(assetsSaga);
  yield spawn(exchangesSaga);
  yield spawn(marketsSaga);
}
