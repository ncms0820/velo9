
const Button = ( { txt, className, onClick } ) => {

  // onClick 없을때 새로 만들어주기.

  return (
    <button
      style={btnCSS}
      className={className}
      onClick={onClick}
    >
      {txt}
    </button>
  );
};

export default Button;


const btnCSS = {
}