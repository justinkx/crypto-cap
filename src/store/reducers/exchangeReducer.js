import { SAVE_EXCHANGES } from '../actions/exchangeActions';

const initialState = {};

export default function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_EXCHANGES:
      const exchanges = action?.exchanges || {};
      return {
        ...state,
        ...exchanges,
      };

    default:
      return state;
  }
}
