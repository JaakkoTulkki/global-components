import React from 'react';

const Button = ({type, children}) => (
  <button type="button" className={`btn btn-${type}`}>{children}</button>
);

export default Button;
