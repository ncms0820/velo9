import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Explore from "./views/explore/explore";
import Header from "./views/header/header";
import Home from "./views/homepage/home";
import LoginRouter from "./views/login/LoginRouter";
import MypageRouter from "./views/mypage/MypageRouter";
import Read from "./views/read/read";
import Setting from "./views/SettingPage/setting";
import SocialSign from "./views/login/SocialSign";
import Write from "./views/write/write";
import Redirect from "./views/redirect";
import ArchiveRouter from "./views/archive/ArchiveRouter";
import SeriesPost from "./views/mypage/SeriesPosts";
import TempPost from "./views/mypage/TempPost";

function App({ dbService, authService, functionService }) {
  const [onLoginModal, setOnLoginModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const setLoginInfo = (result) => {
    if (result) {
      setUserId(result);
      localStorage.setItem("userId", JSON.stringify(result));
    } else {
      setUserId(null);
      localStorage.removeItem("userId");
    }
  };
  useEffect(() => {
    if (userId) {
      setOnLoginModal(false);
    } else if (userId === null) {
      let user;
      try {
        user = JSON.parse(localStorage.getItem("userId"));
      } catch {
        user = null;
      }
      setUserId(user);
    }
  }, [userId, authService]);

  return (
    <BrowserRouter>
      <Header authService={authService} userId={userId} setLoginInfo={setLoginInfo} setOnLoginModal={setOnLoginModal} />
      {onLoginModal && (
        <LoginRouter
          authService={authService}
          setLoginInfo={setLoginInfo}
          userId={userId}
          setOnLoginModal={setOnLoginModal}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<Home dbService={dbService} authService={authService} userId={userId} onLoginModal={onLoginModal} />}
        />
        <Route
          path="/home"
          element={<Home dbService={dbService} authService={authService} userId={userId} onLoginModal={onLoginModal} />}
        />
        <Route
          path="/velo9"
          element={<Home dbService={dbService} authService={authService} userId={userId} onLoginModal={onLoginModal} />}
        />
        <Route path="/success" element={<Redirect setLoginInfo={setLoginInfo} authService={authService} />} />
        <Route path="/explore" element={<Explore dbService={dbService} />} />
        <Route
          path="/write"
          element={<Write dbService={dbService} functionService={functionService} userId={userId} />}
        />
        <Route
          path="/read"
          element={<Read dbService={dbService} userId={userId} functionService={functionService} />}
        />
        <Route
          path="/setting"
          element={<Setting dbService={dbService} authService={authService} setLoginInfo={setLoginInfo} />}
        />
        <Route path="/:nickname">
          <Route
            path="main"
            element={<MypageRouter userId={userId} dbService={dbService} functionService={functionService} />}
          />
          <Route path="series/:seriesName" element={<SeriesPost userId={userId} dbService={dbService} />} />
        </Route>
        <Route path="/archive" element={<ArchiveRouter userId={userId} dbService={dbService} />} />
        <Route path="/temp" element={<TempPost userId={userId} dbService={dbService} />} />
        <Route
          path="/firstLogin"
          element={<SocialSign authService={authService} setOnLoginModal={setOnLoginModal} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
