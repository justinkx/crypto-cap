import { put, select, takeEvery, all } from 'redux-saga/effects';
import _keys from 'lodash/keys';

import { MESSAGE } from '../actions/socketAction';
import { saveAssets } from '../actions/assetActions';
import { assetReducer } from '../selectors/assetSelector';

function* reduxWebsocketMessage(action) {
  const { payload } = action;
  const parsedMessage = JSON.parse(payload?.message);
  const assets = yield select(assetReducer);
  const assetKeys = _keys(parsedMessage);
  for (let i = 0; i < assetKeys.length; i++) {
    const assetKey = assetKeys[i];
    if (assets[assetKey] && assets[assetKey].priceUsd) {
      assets[assetKey] = {
        ...assets[assetKey],
        priceUsd: parsedMessage[assetKey],
      };
    }
  }

  yield put(saveAssets(assets));
}
export default function* wsMessageSaga() {
  yield all([takeEvery(MESSAGE, reduxWebsocketMessage)]);
}
