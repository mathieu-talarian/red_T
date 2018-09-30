import React from "react";
import { connect } from "react-redux";

import Line from "./Line";

const Board = ({ tetris }) => {
  let lines = [];
  if (tetris.board) {
    tetris.board.forEach((element, key) => {
      lines.push(<Line key={key} cols={element} />);
    });
  }
  return <div className="board">{lines}</div>;
};

const mapStateToProps = ({ game }) => ({
  tetris: game.tetris
});

export default connect(
  mapStateToProps,
  null
)(Board);
