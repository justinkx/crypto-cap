import { spawn } from 'redux-saga/effects';

import assetsSaga from './saga/assetsSaga';

export default function* rootSaga() {
  yield spawn(assetsSaga);
}
