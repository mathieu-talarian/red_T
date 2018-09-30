import { NEW_GAME, END_GAME } from "../actions/actions";
import _ from "lodash";

const initialState = {
  on: false,
  timer: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        on: true
      };
    case END_GAME:
      return {
        ...state,
        on: false
      };
    default:
      return state;
  }
};
