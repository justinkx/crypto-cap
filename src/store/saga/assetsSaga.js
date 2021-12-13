import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_ASSETS, saveAssets } from '../actions/assetActions';
import { CRYPTO_ASSETS } from '../../utils/api';

const parseAssets = (accu, curr) => {
  return {
    ...accu,
    [curr.symbol]: { ...curr },
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
  } catch (error) {}
}

export default function* assetsSaga() {
  yield takeLatest(GET_ASSETS, fetchAssetsSaga);
}
