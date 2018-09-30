/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Case.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mmoullec <mmoullec@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/09/30 17:55:49 by mmoullec          #+#    #+#             */
/*   Updated: 2018/09/30 17:55:53 by mmoullec         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import PropTypes from "prop-types";
import Cube from "../assets/cube.svg";

const Case = ({ content }) => {
  let className = `case`;
  className += content ? ` ${content.className}` : "";
  return <Cube className={className} />;
};

Case.propTypes = {
  content: PropTypes.any.isRequired
};

Case.style = () => ({
  "background-color": "beige"
});

export default Case;
