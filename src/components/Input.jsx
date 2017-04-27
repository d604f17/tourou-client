import React, {Component} from 'react';
import Radium from 'radium';

const Input = ({style, onChange, ...props}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
      <input {...props}
             style={[styles, style]}
             onChange={handleChange}/>
  );
};

const styles = {
  height: '42px',
  width: '100%',
  padding: '0 12px',
  border: '1px solid #e6e6e6',
  borderRadius: '3px',
  color: '#797979',
  transition: '100ms',

  ':focus': {
    outline: '0',
    border: '1px solid #ff6673',
  },
};

export default Radium(Input);