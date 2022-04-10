import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import DbService from "./service/db_service";
import AuthService from "./service/auth_service";

const dbService = new DbService();
const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App dbService={dbService} authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
