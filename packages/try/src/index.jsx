import React from 'react';

export const Button = ({styles, type, children}) =>
  <button type="button" className={`${styles.btn} ${styles[`btn-${type}`]}`}>{children}</button>;

