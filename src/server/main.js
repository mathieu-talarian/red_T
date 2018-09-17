import start from "./index";
import params from "./../../params";

global.Promise = require("bluebird");

start(params)
  .then(() => console.log("ok"))
  .catch();
