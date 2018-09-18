import { LEFT, BOT, RIGHT, TOP, SPACE } from "./actions";
import moving_socket from "../socket/index";

const findKC = keycode => {
  switch (keycode) {
    case 37:
      return LEFT;
    case 40:
      return BOT;
    case 39:
      return RIGHT;
    case 38:
      return TOP;
    case 32:
      return SPACE;
    default:
      return "NONE";
  }
};

export const moved = keycode => ({
  type: keycode,
  message: keycode
});

export const moveTetris = keycode => dispatch => {
  let kc;
  if ((kc = findKC(keycode)) !== "NONE") {
    moving_socket.move(kc);
    return dispatch(moved(kc));
  }
};
