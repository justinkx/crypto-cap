import { SAVE_EXCHANGES } from '../actions/exchangeActions';

const initialState = {};

export default function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_EXCHANGES:
      return {
        ...state,
        ...action.exchanges,
      };

    default:
      return state;
  }
}
