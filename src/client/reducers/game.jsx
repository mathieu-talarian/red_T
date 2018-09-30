import { fromJS, getIn } from "immutable";
import { NEW_GAME } from "../actions/actions";
import { LEFT, BOT, RIGHT, TOP, SPACE } from "../actions/actions";

import Tetris from "./tetris";

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

class Piece {
  l = [];
  p_list = [
    [[0, 0, I, 0], [0, 0, I, 0], [0, 0, I, 0], [0, 0, I, 0]], //I
    [[Z, Z, 0], [0, Z, Z]], //Z
    [[0, S, S], [S, S, 0]], // S
    [[L, 0], [L, 0], [L, L]], // L
    [[0, J], [0, J], [J, J]], // L inverted
    [[O, O], [O, O]], // O
    [[0, T, 0], [T, T, T]] // T
  ];
  constructor() {}
  newPiece = () => {
    return this.p_list[
      Math.floor(Math.random() * Math.floor(this.p_list.length))
    ];
  };
}

const p = new Piece();
const t = new Tetris();

const initialState = {
  tetris: t,
  piece: {
    type: p.newPiece()
  }
};

const computePiece = ({ tetris, piece }) => {
  return tetris.map((item, index) => {
    if (index === 1) {
      return item.map(i => {
        return (i = T);
      });
    } else {
      return item;
    }
  });
};

export default (state = initialState, action) => {
  let { tetris } = state;
  switch (action.type) {
    case NEW_GAME:
      tetris.addPiece(state.piece);
      return {
        ...state,
        on: true,
        tetris: { ...tetris }
      };
    case RIGHT:
      return {
        ...state,
        on: true,
        tetris: { ...tetris.moveRight() }
      };
    case LEFT:
      return {
        ...state,
        tetris: { ...tetris.moveLeft() }
      };
    case BOT:
      return {
        ...state,
        tetris: {
          ...tetris.moveBot()
        }
      };
    case SPACE:
      return {
        ...state,
        tetris: { ...tetris.moveEnd() }
      };
  }
  return state;
};
