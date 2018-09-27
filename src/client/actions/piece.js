import { NEW_PIECE, NEW_GAME } from "./actions";
import { s_promises } from "../socket/api";

export const newPiece = piece => ({
  type: NEW_PIECE,
  piece
});

export const dispatchNewPiece = () => dispatch => {
  getNewPiece().then(res => dispatch(newPiece(res)));
};

export const getNewPiece = () => {
  s_promises.emit("newPiece");
  return s_promises.on("newPiece", res => res);
};
