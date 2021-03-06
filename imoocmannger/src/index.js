import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import Router from './router'
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux'

// import * as serviceWorker from './serviceWorker';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
