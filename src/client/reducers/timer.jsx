import { fromJS } from "immutable";

function startTimer(baseTime = 0) {
  return {
    type: "START_TIMER",
    baseTime: baseTime,
    now: new Date().getTime()
  };
}

function stopTimer() {
  return {
    type: "STOP_TIMER",
    now: new Date().getTime()
  };
}

function resetTimer() {
  return {
    type: "RESET_TIMER",
    now: new Date().getTime()
  };
}

const initialState = fromJS({
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: undefined
});

export default (state = initialState, action) => {
  switch (action.type) {
    case "RESET_TIMER":
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined
      };
    case "START_TIMER":
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined
      };
    case "STOP_TIMER":
      return {
        ...state,
        stoppedAt: action.now
      };
    default:
      return state;
  }
};
