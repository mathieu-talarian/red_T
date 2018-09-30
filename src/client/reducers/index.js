import { combineReducers } from "redux";

import move from "./move";
import game from "./game";

export default combineReducers({
  game,
  move
});