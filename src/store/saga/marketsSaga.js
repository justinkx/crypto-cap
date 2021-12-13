import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { saveMarkets } from '../actions/marketsAction';
import { FETCH_INITIAL_DATA } from '../actions/appActions';
import { CRYPTO_MARKETS } from '../../utils/api';

const parseMarkets = (accu, curr) => {
  return {
    ...accu,
    [curr.exchangeId]: { ...curr },
  };
};

async function fetchMarkets() {
  try {
    const { data } = await axios.get(CRYPTO_MARKETS);
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchMarketsSaga() {
  try {
    const { data = [] } = yield call(fetchMarkets);
    const parsedMarkets = data.reduce(parseMarkets, {});
    yield put(saveMarkets(parsedMarkets));
  } catch (error) {}
}

export default function* marketsSaga() {
  yield takeLatest(FETCH_INITIAL_DATA, fetchMarketsSaga);
}
