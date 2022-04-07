import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./views/homepage/home";
import Login from "./views/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
