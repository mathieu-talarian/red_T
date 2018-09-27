import openSocket from "socket.io-client";
import _ from "lodash";

import { newPiece, getNewPiece, dispatchNewPiece } from "../actions/piece";
const socket = openSocket(localStorage.getItem("url"));
export const storeStateMiddleWare = ({ dispatch, getState }) => {
  return next => action => {
    let returnValue = next(action);
    window.top.state = getState();
    return returnValue;
  };
};
