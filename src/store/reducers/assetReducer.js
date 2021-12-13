import { SAVE_ASSETS } from '../actions/assetActions';

export const initialState = {};

export default function assetReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ASSETS:
      const assets = action.assets;
      return {
        ...state,
        ...assets,
      };

    default:
      state;
  }
}
