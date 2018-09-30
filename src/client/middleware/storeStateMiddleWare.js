export const storeStateMiddleWare = ({ dispatch, getState }) => {
  return next => action => {
    let returnValue = next(action);
    window.top.state = getState();
    return returnValue;
  };
};
