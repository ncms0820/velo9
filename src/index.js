import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import DbService from "./service/db_service";

const dbService = new DbService();

ReactDOM.render(
  <React.StrictMode>
    <App dbService={dbService} />
  </React.StrictMode>,
  document.getElementById("root")
);
