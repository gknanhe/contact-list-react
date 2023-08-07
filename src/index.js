import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componants/App";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
