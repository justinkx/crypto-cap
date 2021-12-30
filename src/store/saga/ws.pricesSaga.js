import { put, take } from 'redux-saga/effects';
import { connect } from '@giantmachines/redux-websocket';

import { CONNECT_SOCKET } from '../actions/socketAction';
import { PRICES_SOCKET } from '../../utils/api';

export default function* websocketConnectionSaga() {
  while (true) {
    yield take(CONNECT_SOCKET);
    yield put(connect(PRICES_SOCKET));
  }
}
