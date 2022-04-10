import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./views/homepage/home";
import LoginRouter from "./views/login/LoginRouter";
import Test from "./views/login/Test";

function App({ dbService, authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dbService={dbService} authService={authService} />} />
        <Route path="/home" element={<Home dbService={dbService} authService={authService} />} />
        <Route path="/login" element={<LoginRouter authService={authService} />} />
        
        <Route path="/test_pie" element={<Test dbService={dbService} authService={authService} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
