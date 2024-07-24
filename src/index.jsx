import React from "react";
import ReactDOM from "react-dom";
import "./styles/color.css";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";
import "./i18n";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);