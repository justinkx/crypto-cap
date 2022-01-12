import axios from 'axios';
import { put, takeLatest, call, delay } from 'redux-saga/effects';

import { saveAssets, fetchAssetsSuccess } from '../actions/assetActions';
import { FETCH_INITIAL_DATA } from '../actions/appActions';
import { CRYPTO_ASSETS, CRYPTO_ASSETS_SPARKLINE } from '../../utils/api';
import { connectSocket } from '../actions/socketAction';

const parseAssets = (accu, curr) => {
  return {
    ...accu,
    [curr.id]: { ...curr },
  };
};

async function fetchAssets(url = CRYPTO_ASSETS) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchAssetsSaga() {
  try {
    const data = yield call(fetchAssets, CRYPTO_ASSETS) || [];
    if (data) {
      const parsedAssets = data.reduce(parseAssets, {});
      yield put(saveAssets(parsedAssets));
      yield put(fetchAssetsSuccess());
      yield put(connectSocket());
    }
  } catch (error) {}
}

function* fetchSparkLineSaga() {
  while (true) {
    try {
      const data = yield call(fetchAssets, CRYPTO_ASSETS_SPARKLINE) || [];
      if (data) {
        const parsedAssets = data.reduce(parseAssets, {});
        yield put(saveAssets(parsedAssets));
      }
    } catch {}
    yield delay(10000);
  }
}

export default function* assetsSaga() {
  yield takeLatest(FETCH_INITIAL_DATA, fetchAssetsSaga);
  yield takeLatest(FETCH_INITIAL_DATA, fetchSparkLineSaga);
}
