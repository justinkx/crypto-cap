import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { saveAssets, fetchAssetsSuccess } from '../actions/assetActions';
import { FETCH_INITIAL_DATA } from '../actions/appActions';
import { CRYPTO_ASSETS } from '../../utils/api';

const parseAssets = (accu, curr) => {
  return {
    ...accu,
    [curr.id]: { ...curr },
  };
};

async function fetchAssets() {
  try {
    const { data } = await axios.get(CRYPTO_ASSETS);
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchAssetsSaga() {
  try {
    const { data = [] } = yield call(fetchAssets);
    const parsedAssets = data.reduce(parseAssets, {});
    yield put(saveAssets(parsedAssets));
    yield put(fetchAssetsSuccess());
  } catch (error) {}
}

export default function* assetsSaga() {
  yield takeLatest(FETCH_INITIAL_DATA, fetchAssetsSaga);
}
