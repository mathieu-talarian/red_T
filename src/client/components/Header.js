import React from "react";
import { connect } from "react-redux";
import {startGame} from "../actions/game"

const Header = ({ startGame }) => (
  <div className="header">
    <h1>CACAAAA</h1>
    this is the header
    <button onClick={startGame}>StartGame</button>
  </div>
);

export default connect(
  null,
  { startGame }
)(Header);
