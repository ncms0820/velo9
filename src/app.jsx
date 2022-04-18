import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Explore from "./views/explore/explore";
import Header from "./views/header/header";
import Home from "./views/homepage/home";
import LoginRouter from "./views/login/LoginRouter";
import MypageRouter from "./views/mypage/MypageRouter";
import Read from "./views/read/read";
import Setting from "./views/setting/setting";
import SocialSign from "./views/login/SocialSign";
import Write from "./views/write/write";
import Redirect from "./views/redirect";

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
        user = localStorage.getItem("userId");
      } catch {
        user = null;
      }
      setUserId(user);
    }
  }, [userId, authService]);

  return (
    <>
      <Header
        authService={authService}
        userId={userId}
        setLoginInfo={setLoginInfo}
        setOnLoginModal={setOnLoginModal}
      />
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
        <Route path="/success" element={<Redirect setLoginInfo={setLoginInfo} authService={authService} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/write" element={<Write />} />
        <Route path="/read" element={<Read />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mypage" element={<MypageRouter userId={userId} />} />
        <Route
          path="/firstLogin"
          element={<SocialSign authService={authService} setOnLoginModal={setOnLoginModal} />}
        />
      </Routes>
    </>
  );
}

export default App;
