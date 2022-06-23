import React, { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChats } from "../../Redux/Actions/chatAction";
import { SET_MESSAGE } from "../../Redux/types/modalstype";
import { ADD_ALL_CHATS } from "../../Redux/types/types";

const WsContext = createContext();

function Context({ children }) {
  const { userSignIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ws, setWs] = useState(new WebSocket(process.env.REACT_APP_WS));

  ws.onmessage = function (event) {
    // const {type, payload} = JSON.parse(event.data);
    const { type, payload } = JSON.parse(event.data);

    console.log("-------> Отправлено всем kek", type);
    console.log("-------> Отправлено всем kek", userSignIn.id);
    switch (type) {
      case "SET_MESSAGE":
        console.log("switch zashel set message");
        dispatch(getAllChats(userSignIn));
        console.log(userSignIn.id);

        break;
      default:
        console.log("ZAchel v break");
      // return state;
    }
  };
  return <WsContext.Provider value={{ ws }}>{children}</WsContext.Provider>;
}

export default Context;
export const useWsContext = () => useContext(WsContext);
