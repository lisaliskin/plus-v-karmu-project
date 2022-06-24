/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChats } from "../../Redux/Actions/chatAction";
import { addCount } from "../../Redux/Actions/countAction";


const WsContext = createContext();

function Context({ children }) {
  const { userSignIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ws, setWs] = useState(new WebSocket(process.env.REACT_APP_WS));

  ws.onmessage = function (event) {
    // const {type, payload} = JSON.parse(event.data);
    const { type, payload } = JSON.parse(event.data);

    switch (type) {
      case "SET_MESSAGE":
        dispatch(getAllChats(userSignIn));

      case "ADD_COUNT":
        console.log('Зашел ADD_COUNT')
        dispatch(addCount(1))
      default:
        console.log("ZAchel v default");
    }
  };
  return <WsContext.Provider value={{ ws }}>{children}</WsContext.Provider>;
}

export default Context;
export const useWsContext = () => useContext(WsContext);
