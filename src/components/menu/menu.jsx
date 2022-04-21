import React, { useEffect, useRef } from "react";
import styles from "./_menu.module.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Menu = ({ tabMenu, authService, setLoginInfo, userId }) => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const sweetAlert = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      text: "신중하셔야 하옵니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await authService.logout().then(() => {
          setLoginInfo();
        });
        navigate("/");
        Swal.fire("로그아웃", "정상적으로 로그아웃 되었습니다.", "success");
      }
    });
  };
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          tabMenu();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
console.log(userId)
  return (
    <div className={styles.nav} ref={wrapperRef}>
      <div
        onClick={() => {
          navigate(`/${userId.nickname}/main`);
        }}
      >
        내 벨로그
      </div>
      <div
        onClick={() => {
          navigate('/temp');
        }}
      >
        임시 저장
      </div>
      <div
        onClick={() => {
          navigate("/archive");
        }}
      >
        읽기 목록
      </div>
      <div
        onClick={() => {
          navigate("/setting");
        }}
      >
        설정
      </div>
      <div onClick={sweetAlert}>로그아웃</div>
    </div>
  );
};

export default Menu;
