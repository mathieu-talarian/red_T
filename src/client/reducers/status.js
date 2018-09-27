import { NEW_GAME, END_GAME } from "../actions/actions";
import _ from "lodash";

function foo() {
  this.status = false;
}

foo.prototype.status = false;

export default (state = {}, action) => {
  const a = false;
  const b = true;
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        status: true
      };
    case END_GAME:
      return {
        ...state,
        status: false
      };
    default:
      return _.assign(state, new foo());
  }
};
