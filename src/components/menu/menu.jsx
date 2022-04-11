import React from "react";
import styles from "./_menu.module.scss";
import Swal from "sweetalert2";
const Menu = ({ onLogout }) => {
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
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
        Swal.fire("로그아웃", "정상적으로 로그아웃 되었습니다.", "success");
      }
    });
  };

  return (
    <div className={styles.nav}>
      <div>내 벨로그</div>
      <div>임시 저장</div>
      <div>읽기 목록</div>
      <div>설정</div>
      <div onClick={sweetAlert}>로그아웃</div>
    </div>
  );
};

export default Menu;
