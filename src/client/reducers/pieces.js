import { NEW_PIECE } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case NEW_PIECE:
      return {
        ...state,
        piece: action.piece
      };
    default:
      return state;
  }
};
