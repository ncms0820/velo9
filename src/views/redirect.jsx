import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./etc/error";

const Redirect = ({ setLoginInfo, authService }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const result = authService.getUserInfo().then((data) => {
      setLoginInfo(result);
      return data;
    });
    navigate("/");
  }, [navigate, setLoginInfo, authService]);

  return <Error title={"Loading "} />;
};

export default Redirect;
