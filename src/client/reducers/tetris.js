const tetris = [
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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const T = {
  className: "red"
};

export default class Tetris {
  board = tetris;
  updatedBoard = tetris;
  piece;
  addPiece = piece => {
    this.x = 0;
    this.y = 0;
    this.piece = piece;
    this.board = this.updateBoard();
    return this;
  };

  moveRight = () => {
    if (this.x + 1 < this.board[0].length) this.x++;
    this.board = this.updatedBoard;
    this.board = this.updateBoard();
    return this;
  };

  moveLeft = () => {
    if (this.x - 1 >= 0) this.x--;
    this.board = this.updatedBoard;
    this.board = this.updateBoard();
    return this;
  };

  checkBot = () => {
    const { x, y, board } = this;
    const yy = y + 1;
    if (yy < board.length) {
      return board[yy][x] === 0;
    }
    return false;
  };

  moveBot = () => {
    if (this.checkBot(this)) this.y++;
    this.board = this.updatedBoard;
    this.board = this.updateBoard();
    this.checkifNewPiece();
    return this;
  };

  moveEnd = () => {
    this.y = this.board.length - 1;
    this.board = this.updatedBoard;
    this.board = this.updateBoard();
    this.checkifNewPiece();
    return this;
  };

  checkifNewPiece = () => {
    const { x, y, board } = this;
    let yy = y + 1;
    if (yy < board.length || board[yy][x] !== 0) {
      this.updatedBoard = this.board;
      this.x = 0;
      this.y = 0;
      this.addPiece(this.piece);
    }
  };

  updateBoard = () => {
    this.tetris = tetris;
    const { x, y, board: tetris } = this;

    return tetris.map((item, index) => {
      if (index === y) {
        return item.map((i, X) => {
          if (x === X) {
            return (i = T);
          } else {
            return i;
          }
        });
      } else {
        return item;
      }
    });
  };
}
