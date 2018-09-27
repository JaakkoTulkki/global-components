import React from 'react';
import ReactDOM from 'react-dom';
import { Button as ComponentButton} from 'try/dist/try';
import styles from './styles.scss';

const Button = (props) =>
  <ComponentButton styles={styles} {...props} />

const Buttons = () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Primary</Button>
    <Button type="primary">Primary</Button>
  </div>
)

ReactDOM.render(
  <Buttons />,
  document.getElementById('app')
);