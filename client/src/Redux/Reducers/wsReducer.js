const wsReducer = (state = new WebSocket(process.env.REACT_APP_WS), action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_NEW':
      return new WebSocket(process.env.REACT_APP_WS);
    default:
      return state;
  }
};
export default wsReducer;
