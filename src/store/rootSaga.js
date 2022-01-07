import { spawn } from 'redux-saga/effects';

import assetsSaga from './saga/assetsSaga';
import exchangesSaga from './saga/exchangeSaga';
import websocketConnectionSaga from './saga/ws.pricesSaga';
import wsMessageSaga from './saga/ws.messageSaga';

export default function* rootSaga() {
  yield spawn(assetsSaga);
  yield spawn(exchangesSaga);
  yield spawn(websocketConnectionSaga);
  yield spawn(wsMessageSaga);
}
