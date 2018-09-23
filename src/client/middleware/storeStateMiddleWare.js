import openSocket from "socket.io-client";

import {newGame, newPiece} from "../actions/actions";

import {io_api} from "../socket/api";

const socket = openSocket(localStorage.getItem("url"));
export const storeStateMiddleWare = ({dispatch, getState}) => {
    console.log("test");
    return next => action => {
        io_api
            .newGame()
            .then(nt => dispatch(newGame(nt)))
            .then(() => io_api.newPiece())
            .then(res => dispatch(newPiece(res)));
        let returnValue = next(action);
        window.top.state = getState();
        return returnValue;
    };
};
