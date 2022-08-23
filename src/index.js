import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Config Function of App Store:
import { createAppStore } from './store/config/storeConfig'
// Redux imports:
import { Provider } from 'react-redux';


let appStore = createAppStore()

ReactDOM.render(
  // Lo envolvemos en Provider pasando props:
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
