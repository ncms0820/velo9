import { forwardRef } from "react";

const Txt = forwardRef(( { txt, className, onClick }, ref ) => {

  // onClick 없을때 새로 만들어주기.

  return (
    <span
      className={className}
      onClick={onClick}
      ref={ref}
    >
      {txt}
    </span>
  );
});

export default Txt;
