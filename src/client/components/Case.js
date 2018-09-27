import React from "react";
import PropTypes from "prop-types";
import Cube from "../assets/cube.svg";

const Case = ({ content }) => {
  let className = `case`;
  className += content ? ` ${content.className}` : "";
  return <Cube className={className} />;
};
// const Case = ({ content }) => (
//   <div className={"case" + (content ? " piece" : "")} />
// );
Case.propTypes = {
  content: PropTypes.any.isRequired
};

Case.style = () => ({
  "background-color": "beige"
});

export default Case;
