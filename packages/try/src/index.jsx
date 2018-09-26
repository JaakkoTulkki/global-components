import React from 'react';

export const Button = ({type, children}) => <button type="button" className={`btn btn-${type}`}>{children}</button>;
