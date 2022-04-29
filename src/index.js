import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import DbService from "./service/db_service";
import AuthService from "./service/auth_service";
import FunctionService from "./service/function_service";
import { BrowserRouter } from "react-router-dom";

const dbService = new DbService();
const authService = new AuthService();
const functionService = new FunctionService();

ReactDOM.render(
  <React.StrictMode>

    {/* 여기 브라우저 라우터  */}
      <App dbService={dbService} authService={authService} functionService={functionService} />

  </React.StrictMode>,
  document.getElementById("root")
);
