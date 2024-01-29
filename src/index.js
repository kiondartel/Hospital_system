import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routers/router";
import GlobalStyle from "./styles/GlobalStyle ";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.StrictMode>
);
