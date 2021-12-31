import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

import { saveExchanges } from '../actions/exchangeActions';
import { FETCH_INITIAL_DATA } from '../actions/appActions';
import { CRYPTO_EXCHANGES } from '../../utils/api';

const parseExchanges = (accu, curr) => {
  return {
    ...accu,
    [curr.exchangeId]: { ...curr },
  };
};

async function fetchExchanges() {
  try {
    const { data } = await axios.get(CRYPTO_EXCHANGES);
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchExchangesSaga() {
  try {
    const { data = [] } = yield call(fetchExchanges);
    const parsedExchanges = data.reduce(parseExchanges, {});
    yield put(saveExchanges(parsedExchanges));
  } catch (error) {}
}

export default function* exchangesSaga() {
  yield takeLatest(FETCH_INITIAL_DATA, fetchExchangesSaga);
}
