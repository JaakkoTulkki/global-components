import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'try/dist/try';
import './styles.scss';

const Buttons = () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
  </div>
)

ReactDOM.render(
  <Buttons />,
  document.getElementById('app')
);