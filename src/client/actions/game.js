import { NEW_GAME } from "./actions";

export const newGame = () => ({
  type: NEW_GAME
});

export const startGame = () => dispatch => dispatch(newGame());
