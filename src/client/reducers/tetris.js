import { NEW_GAME } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        tetris: action.tetris
      };
    default:
      return state;
  }
};
