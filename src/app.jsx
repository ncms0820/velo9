import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Explore from "./views/explore/explore";
import Home from "./views/homepage/home";
import LoginRouter from "./views/login/LoginRouter";
import Write from "./views/write/write";

function App({ dbService, authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dbService={dbService} authService={authService} />} />
        <Route path="/home" element={<Home dbService={dbService} authService={authService} />} />
        <Route path="/login" element={<LoginRouter authService={authService} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
