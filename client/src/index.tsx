import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';

// https://www.youtube.com/watch?v=tBr-PybP_9c&t=311s
// start at 54:09 minutes, creating the conversations

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
