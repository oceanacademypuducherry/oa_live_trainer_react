import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://oa-live-api.herokuapp.com/",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
