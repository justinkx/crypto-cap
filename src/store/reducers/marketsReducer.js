import { SAVE_MARKETS } from '../actions/marketsAction';

const initialState = {};

export default function marketsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MARKETS:
      return { ...state, ...action.markets };
    default:
      return state;
  }
}
