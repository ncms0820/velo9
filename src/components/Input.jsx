

{/* <input type="text" className={styles.idInputEle} name="" id="" /> */}


const Input = ( { type, className, onChange, eventParam } ) => {
  
  const onChangeSetParam = (e, eventParam) => eventParam ? onChange(e, ...eventParam) : onChange(e)

  return (
    <input type={type}
      className={className}
      onChange={(e) => onChangeSetParam(e, eventParam)}
    />
  );
};

export default Input;
