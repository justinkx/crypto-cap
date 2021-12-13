import { spawn } from 'redux-saga/effects';

import assetsSaga from './saga/assetsSaga';
import exchangesSaga from './saga/exchangeSaga';

export default function* rootSaga() {
  yield spawn(assetsSaga);
  yield spawn(exchangesSaga);
}
