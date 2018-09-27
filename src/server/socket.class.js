export default class Socket {
  constructor(socket) {
    this.socket = socket;
    this.id = socket.id;
    console.log("socket connected " + this.id);
    this.pieces = new Piece();
  }

  startTetris = () => {
    const tetris = new Tetris();
    this.socket.emit("newGame", { nt: tetris.newBoard() });
    this.handlePiece();
  };

  handlePiece = () => {
    const { pieces } = this;
    this.socket.on("newPiece", () => {
      this.socket.emit("newPiece", this.pieces.newPiece());
    });
  };
}

export class Tetris {
  constructor() {}

  newBoard = () => {
    return [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  };
}

export class Piece {
  l = [];
  p_list = [
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]], //I
    [[1, 1, 0], [0, 1, 1]], //Z
    [[0, 1, 1], [1, 1, 0]], // S
    [[1, 0], [1, 0], [1, 1]], // L
    [[0, 1], [0, 1], [1, 1]], // L inverted
    [[1, 1], [1, 1]], // O
    [[0, 1, 0], [1, 1, 1]] // T
  ];
  constructor() {}
  newPiece = () => {
    return this.p_list[
      Math.floor(Math.random() * Math.floor(this.p_list.length))
    ];
  };
}
