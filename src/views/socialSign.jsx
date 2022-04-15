import axios from "axios";
import React from "react";

const SocialSign = (props) => {
  const signUpTest = async () => {
    await axios
      .post(
        "http://localhost:8080/socialSignup",
        {
          username: "test2asdf",
          password: "passwofdgsdsdfzxcvrd",
          nickname: "nicknsdsdffame",
        },
        { headers: { "Content-Type": `application/json` } }
      )
      .then((res) => {
        console.log(res);
      });
  };
  return <button onClick={signUpTest}>test</button>;
};

export default SocialSign;
