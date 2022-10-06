import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./add-to-cart/index.css";
import App from "./App";
// import App from "./add-to-cart/App";
import reportWebVitals from "./reportWebVitals";
import { Context } from "./context/Context";
// import { Context } from "./add-to-cart/context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);

reportWebVitals();
