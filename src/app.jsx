import {  useEffect, useState } from "react";
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

function App({ dbService, authService }) {
  const [onLoginModal, setOnLoginModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    if(userId){
      setOnLoginModal(false);
    }
  
  }, [userId])
  

  return (
    <>
      <Header
        onLogout={userId && onLogout}
        authService={authService}
        setUserId={setUserId}
        onLoginModal={onLoginModal}
        setOnLoginModal={setOnLoginModal}
      />
      {onLoginModal && (
        <LoginRouter
          authService={authService}
          setUserId={setUserId}
          userId={userId}
          setOnLoginModal={setOnLoginModal} 
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<Home dbService={dbService} authService={authService} userId={userId} onLoginModal={onLoginModal} />}
        />
        <Route path="/success" element={<Redirect setUserId={setUserId} authService={authService} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/write" element={<Write  />} />
        <Route path="/read" element={<Read  />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mypage" element={<MypageRouter userId={userId} />} />
<<<<<<< HEAD
        <Route path="/firstLogin" element={<SocialSign />} />
        {/* Router 주소 수정예정, userId params로 전달 */}
=======
        <Route path="/firstLogin" element={<SocialSign authService={authService} setUserId={setUserId} />} />
>>>>>>> 351cedc61a946c623c9eebc89a0573bb59efc04d
      </Routes>
      </>
  );
}

export default App;
