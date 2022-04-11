import React from "react";
import { useLocation } from "react-router-dom";

const Read = (props) => {
  const location = useLocation();
  const data = location;
  console.log(data);
  return <h1>hello</h1>;
};

export default Read;
