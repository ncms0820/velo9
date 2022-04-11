import React, { forwardRef } from "react";
import InputSpan from './InputSpan'
import styles from './_search.module.scss'

const { input } = styles

const Input = forwardRef(({ placeholder, shortcuts, ...otherProps }, ref) => {
  return (
    <div style={{ position: "relative" }}>
      <input
        ref={ref}
        {...otherProps}
        tabIndex={1}
        type="text"
        placeholder={placeholder}
        className={input}
      />
      {
        shortcuts ? <InputSpan /> : <></>
      }
    </div>
  );
});

export default Input;
