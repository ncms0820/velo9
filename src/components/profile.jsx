import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./profile.module.scss";

const Profile = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={styles.test}>Profile</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default Profile;
