import React from "react";
import PropTypes from "prop-types";

import Case from "./case";

const Line = ({ cols }) => {
  let colonnes = [];
  for (let i = 0; i < cols; i++) {
    colonnes.push(<Case key={i} />);
  }
  return <div className="line">{colonnes}</div>;
};

Line.propTypes = {
  cols: PropTypes.number.isRequired
};

export default Line;
