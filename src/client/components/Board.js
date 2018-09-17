import React from "react";
import Line from "./Line";

const Board = () => {
  let lines = [];
  let i = 0;
  const horiz = 20;
  const vert = 10;
  while (i++ < horiz) {
    lines.push(<Line key={i.toString()} cols={vert} />);
  }
  return <div className="board">{lines}</div>;
};

export default Board;
