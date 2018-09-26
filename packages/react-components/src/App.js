import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
          <Button type="warning">Warning</Button>
          <Button type="info">Info</Button>
          <Button type="light">Light</Button>
          <Button type="dark">Dark</Button>
        </p>
      </div>
    );
  }
}

export default App;
