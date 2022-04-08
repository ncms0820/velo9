
const Input = ( { type, className, onChange, value, placeholder, onEnter } ) => {
  
  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      return onEnter()
    }
  }

  return (
    <input type={type}
      className={className}
      value={value}
      name={type}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={(e) => onPressEnter(e)}
    />
  );
};

export default Input;
