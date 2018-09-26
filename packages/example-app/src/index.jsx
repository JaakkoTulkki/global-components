import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'try/dist/try';

const Buttons = () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <Button type="light">Light</Button>
    <Button type="dark">Dark</Button>
  </div>
)

ReactDOM.render(
  <Buttons />,
  document.getElementById('app')
);