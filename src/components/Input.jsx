
const Input = ( { type, className, onChange, value, eventParam } ) => {
  
  const onChangeSetParam = (e, eventParam) => {
    if (eventParam) onChange(e, ...eventParam)
    else onChange(e)
  } 

  return (
    <input type={type}
      className={className}
      value={value}
      name={type}
      onChange={(e) => onChangeSetParam(e, eventParam)}
    />
  );
};

export default Input;
