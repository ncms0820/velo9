import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Explore from "./views/explore/explore";
import Header from "./views/header/header";
import Home from "./views/homepage/home";
import LoginRouter from "./views/login/LoginRouter";
import MypageRouter from "./views/mypage/MypageRouter";
import Read from "./views/read/read";
import Write from "./views/write/write";

function App({ dbService, authService }) {

  const [onLoginModal, setOnLoginModal] = useState(false)

  const [userId, setUserId] = useState(null);
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  return (
    <BrowserRouter>
      <Header onLogout={userId && onLogout} authService={authService} setUserId={setUserId} onLoginModal={onLoginModal} setOnLoginModal={setOnLoginModal} />
        { onLoginModal &&
          <LoginRouter authService={authService} setUserId={setUserId} userId={userId} setOnLoginModal={setOnLoginModal} />
        }
      <Routes>
        <Route path="/" element={<Home dbService={dbService} authService={authService} userId={userId} onLoginModal={onLoginModal}/>} />
        {/* <Route
          path="/login"
          element={<LoginRouter authService={authService} setUserId={setUserId} userId={userId} />}
        /> */}
        <Route path="/explore" element={<Explore />} userId={userId} />
        <Route path="/write" element={<Write userId={userId} />} />
        <Route path="/read" element={<Read userId={userId} />} />


        <Route path='mypage' element={<MypageRouter userId={userId} />} />  {/* Router 주소 수정예정, userId params로 전달 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
