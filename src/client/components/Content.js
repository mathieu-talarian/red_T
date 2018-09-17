import React, { Component } from "react";
import Board from "./Board";

const Content = () => (
  <div className="content">
    <div className="top_p" />
    <div className="center">
      <div className="p" />
      <Board />
      <div className="p" />
    </div>
    <div className="bot_p" />
  </div>
);

export default Content;
