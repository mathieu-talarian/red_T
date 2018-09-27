import openSocket from "socket.io-client";
// const socket = openSocket(server.url());
const socket = openSocket(localStorage.getItem("url"));

export const s_promises = {
  emit: (event, data) => {
    return new global.Promise((resolve, reject) => {
      if (!socket) {
        reject("No socket conection");
      } else {
        socket.emit(event, data, res => {
          if (res.error) {
            reject(res.error);
          } else {
            resolve(res);
          }
        });
      }
    });
  },
  on: (event, cb) => {
    return new global.Promise((resolve, reject) => {
      if (!socket) {
        reject("No socket conection");
      } else {
        socket.on(event, res => {
          resolve(cb(res));
        });
      }
    });
  }
};

export const io_api = {
  move: code => s_promises.emit("move", code).then(() => res.data),
  newPiece: () => {
    s_promises.emit("newPiece", null);
  },
  newGame: () => s_promises.on("newGame", res => res.nt)
};
