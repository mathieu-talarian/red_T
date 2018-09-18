import React from "react";
import { connect } from "react-redux";

import Line from "./Line";

const Board = props => {
  const { tetris } = props.tetris;
  let lines = [];
  if (tetris) {
    tetris.forEach((element, key) => {
      lines.push(<Line key={key} cols={element} />);
    });
  }
  return <div className="board">{lines}</div>;
};

const mapStateToProps = ({ tetris }) => ({
  tetris
});

export default connect(
  mapStateToProps,
  null
)(Board);
