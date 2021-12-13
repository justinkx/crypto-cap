import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_ASSETS, saveAssets } from '../actions/assetActions';
import { CRYPTO_ASSETS } from '../../utils/api';

async function fetchAssets() {
  try {
    const { data } = await axios.get(GET_ASSETS);
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchAssetsSaga() {
  try {
    const data = yield call(fetchAssets);
    console.log({ data });
  } catch (error) {}
}

export default function* assetsSaga() {
  yield takeLatest(GET_ASSETS, fetchAssetsSaga);
}
