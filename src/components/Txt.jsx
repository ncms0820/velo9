
const Txt = ( { txt, className } ) => {

  // onClick 없을때 새로 만들어주기.

  return (
    <span className={className}
    >
      {txt}
    </span>
  );
};

export default Txt;
