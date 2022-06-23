const wsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_NEW':
      return new WebSocket(process.env.REACT_APP_WS);
      // return [];
    default:
      return state;
  }
};
export default wsReducer;
