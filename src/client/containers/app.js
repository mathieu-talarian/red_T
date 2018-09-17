import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

const App = ({ message }) => (
  <div className="red_tetris">
    <Header />
    <Content />
    <Footer />
  </div>
);

const mapStateToProps = state => ({ message: state.message });

App.propTypes = {
  message: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(App);
