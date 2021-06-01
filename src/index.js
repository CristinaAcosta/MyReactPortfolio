import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render((
  <HashRouter basename="Cristina">
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </HashRouter>
  ), document.getElementById('root')
);