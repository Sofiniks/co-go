import React from 'react';
import ReactDOM from 'react-dom';
import ComingSoon from './ComingSoon';
import reportWebVitals from './reportWebVitals';

import './styles/_globals.module.scss';


ReactDOM.render(
    <ComingSoon />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
