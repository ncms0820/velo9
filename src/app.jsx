import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Explore from "./views/explore/explore";
import Header from "./views/header/header";
import Home from "./views/homepage/home";
import LoginRouter from "./views/login/LoginRouter";
import Write from "./views/write/write";

function App({ dbService, authService }) {
  const [userId, setUserId] = useState(null);
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  return (
    <BrowserRouter>
      <Header onLogout={userId && onLogout} authService={authService} setUserId={setUserId} />
      <Routes>
        <Route path="/" element={<Home dbService={dbService} authService={authService} userId={userId} />} />
        <Route
          path="/login"
          element={<LoginRouter authService={authService} setUserId={setUserId} userId={userId} />}
        />
        <Route path="/explore" element={<Explore />} userId={userId} />
        <Route path="/write" element={<Write userId={userId} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
