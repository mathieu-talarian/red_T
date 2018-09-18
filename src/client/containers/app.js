import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

import { moveTetris } from "../actions/moveTetris";

const App = ({ message, moveTetris }) => {
  let move = e => {
    e.preventDefault;
    return moveTetris(e.keyCode);
  };
  return (
    <div className="red_tetris" tabIndex="0" onKeyDown={move}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({ message: state.message });

App.propTypes = {
  message: PropTypes.string,
  moveTetris: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { moveTetris }
)(App);
