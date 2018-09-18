import openSocket from "socket.io-client";
// const socket = openSocket(server.url());
const socket = openSocket(localStorage.getItem("url"));

export default {
  move: code => socket.emit("move", code),
  move1: code => {
    return new Promise((resolve, reject) => {
      return socket.emit("move", code, response => {
        if (response.error) return reject(response.error);
        return resolve(response);
      });
    });
  }
};
