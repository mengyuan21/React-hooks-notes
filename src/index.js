import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseRef from './useRef/useRef';
import UseContext from './useContext/useContext';
import UseCallback from './useCallback/useCallback';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseRef/> */}
    {/* <UseContext/> */}
    <UseCallback/>
  </React.StrictMode>,
  document.getElementById('root')
);
