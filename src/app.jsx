import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./views/homepage/home";
import Login from "./views/login/Login";
import LoginRouter from "./views/login/LoginRouter";

function App({ dbService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dbService={dbService} />} />
        <Route path="/home" element={<Home dbService={dbService} />} />
        <Route path="/login" element={<LoginRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
