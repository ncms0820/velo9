import React from "react";

const Button = ({ txt, className, onClick, name }) => {
  // onClick 없을때 새로 만들어주기.

  return (
    <button style={btnCSS} className={className} onClick={onClick} name={name}>
      {txt}
    </button>
  );
};

export default Button;

const btnCSS = {
  cursor: "pointer",
};
