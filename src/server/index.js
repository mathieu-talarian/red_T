import debug from "debug";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import socket from "socket.io";
const webpack = require("webpack");
const config = require("../../webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const logerror = debug("tetris:error");
const loginfo = debug("tetris:info");
const compiler = webpack(config);

const initApp = (app, { host, port }, cb) => {
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(cors({ origin: "*" }));
  // app.use(express.static(__dirname + "/dist"));

  // app.use(webpackDevMiddleware(compiler));
  // app.use(webpackHotMiddleware(compiler));

  // app.get("*", (req, res) => {
  //   res.sendFile("index.html", { root: __dirname + "/dist" });
  // });
  app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.header("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", false);

    // Pass to next layer of middleware
    next();
  });

  const server = http.Server(app);
  server.listen({ host, port }, function() {
    loginfo(`tetris listen on ${host}:${port}`);
    cb(this);
  });
};

import Socket from "./socket.class";

const initEngine = io => {
  io.on("connection", function(socket) {
    socket = new Socket(socket);
    socket.startTetris();
    // socket.on("move", movement => {
    //   console.log(movement);
    //   socket.emit("move", { type: "pong" });
    // });
    // setInterval(() => {
    //   socket.emit("delta", {});
    // }, 1000);
  });
};

export default params => {
  const promise = new Promise((resolve, reject) => {
    initApp(express(), params.server, app => {
      const io = socket.listen(app);
      const stop = cb => {
        io.close();
        app.close(() => {
          app.unref();
        });
        loginfo("engine stopped");
        cb();
      };

      initEngine(io);
      resolve({ stop });
    });
  });
  return promise;
};
