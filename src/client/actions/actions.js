export const LEFT = "LEFT";
export const BOT = "BOT";
export const RIGHT = "RIGHT";
export const TOP = "TOP";
export const SPACE = "SPACE";
export const NEW_GAME = "NEW_GAME";
export const NEW_PIECE = "NEW_PIECE";

export const newGame = tetris => ({
  type: NEW_GAME,
  tetris
});

export const newPiece = piece => ({
  type: NEW_PIECE,
  piece
});
