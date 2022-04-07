
const Button = ( { txt, className, onClick } ) => {
  return (
    <button
      className={className}
      onClick={() => onClick()}
    >
      {txt}
    </button>
  );
};

export default Button;
