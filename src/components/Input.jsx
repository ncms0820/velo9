
const Input = ( { type, className, onChange, value, placeholder } ) => {
  

  return (
    <input type={type}
      className={className}
      value={value}
      name={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
