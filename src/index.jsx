import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './App.css';

import reducer from './reducer';
import * as serviceWorker from './serviceWorker';

const version = 'chendian 1.3.0';
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App version={version} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
