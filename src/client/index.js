import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import params from "./../../params";
const { server } = params;
import "./style.scss";

//import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
import reducer from "./reducers";
import App from "./containers/app";
import { alert } from "./actions/alert";

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("tetris")
);

store.dispatch(alert("Soon, will be here a fantastic Tetris ..."));

import openSocket from "socket.io-client";
// const socket = openSocket(server.url());
const socket = openSocket(`http://${server.host}:${server.port}`);
function subscribeToTimer(cb) {
  socket.on("timers", timestamp => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}
subscribeToTimer();
