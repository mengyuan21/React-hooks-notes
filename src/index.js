import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseRef from './useRef';
import UseContext from './useContext/useContext';
import UseCallback from './useCallback';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseRef/> */}
    {/* <UseContext/> */}
    <UseCallback/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
