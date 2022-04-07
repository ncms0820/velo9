
const Input = ( { type, className, onChange, value, eventParam, placeholder } ) => {
  
  const onChangeSetParam = (e, eventParam) => {
    if (eventParam) onChange(e, ...eventParam)
    else onChange(e)
  } 

  return (
    <input type={type}
      className={className}
      value={value}
      name={type}
      placeholder={placeholder}
      onChange={(e) => onChangeSetParam(e, eventParam)}
    />
  );
};

export default Input;
