import React, { createContext, useContext, useState } from "react";

const WsContext = createContext();

function Context({ children }) {
  const [ws, setWs] = useState(new WebSocket(process.env.REACT_APP_WS));

  ws.onmessage = function (event) {
    const text = JSON.parse(event.data);
        console.log("-------> Отправлено всем", text);
  };
  return <WsContext.Provider value={{ ws }}>{children}</WsContext.Provider>;
}

export default Context;
export const useWsContext = () => useContext(WsContext);
