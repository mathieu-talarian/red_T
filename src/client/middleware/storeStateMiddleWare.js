import openSocket from "socket.io-client";

import { newGame } from "../actions/actions";

const socket = openSocket(localStorage.getItem("url"));
export const storeStateMiddleWare = ({ dispatch, getState }) => {
  return next => action => {
    // socket.on("newGame", ({ nt }) => {
    //   dispatch(newGame(nt));
    //   socket.emit("newPiece", )
    // });
    let returnValue = next(action);
    window.top.state = getState();
    return returnValue;
  };
};
