import { combineReducers } from "redux";
import alert from "./alert";

import move from "./move";
import tetris from "./tetris";
export default combineReducers({
  alert: () => ({}),
  move: () => ({}),
  tetris: () => ({
    tetris: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [I, 0, 0, 0, 0, Z, J, J, 0, 0],
      [I, 0, 0, 0, Z, Z, J, L, S, 0],
      [I, 0, O, O, Z, T, J, L, S, S],
      [I, 0, O, O, T, T, T, L, L, S]
    ]
  })
});

const T = {
  className: "red"
};

const L = {
  className: "blue"
};

const S = {
  className: "green"
};

const Z = {
  className: "purple"
};

const J = {
  className: "cyan"
};

const I = {
  className: "pink"
};

const O = {
  className: "yellow"
};
