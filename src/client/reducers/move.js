import { LEFT, BOT, RIGHT, TOP, SPACE } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case (LEFT, RIGHT, BOT, TOP, SPACE):
      return { message: action.message };
    default:
      return state;
  }
};
