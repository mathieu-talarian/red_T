import React from "react";
import PropTypes from "prop-types";

import Case from "./case";

const Line = ({ cols }) => {
  console.log(cols);
  let colonnes = [];
  cols.forEach((element, key) => {
    colonnes.push(<Case content={element} key={key} />);
  });
  return <div className="line">{colonnes}</div>;
};

Line.propTypes = {
  cols: PropTypes.array,
};

export default Line;
