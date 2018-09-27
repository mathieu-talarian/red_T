import React, { Component } from "react";
import Board from "./Board";
import { connect } from "react-redux";

const Content = ({ np }) => {
  return (
    <div className="content">
      <Board />
    </div>
  );
};

export default connect(
  null,
  null
)(Content);
