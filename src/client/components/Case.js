import React from "react";
import PropTypes from "prop-types";

const Case = ({ content }) => (
  <div className={"case" + (content ? " piece" : "")} />
);
Case.propTypes = {
  content: PropTypes.number.isRequired
};

Case.style = () => ({
  "background-color": "beige"
});

export default Case;
