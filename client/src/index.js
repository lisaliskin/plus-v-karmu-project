import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import "./Style/style.css";
import storeR from "./Redux/store";
import Context from './Components/Context/Context';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
console.log(process.env);
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={storeR}>
      <Context>
        <App />
      </Context>
    </Provider>
  </BrowserRouter>,
);
