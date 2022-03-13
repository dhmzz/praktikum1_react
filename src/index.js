import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App';
import reportWebVitals from './reportWebVitals';
import No1 from './praktikum1/no1'
import No2 from './praktikum1/no2'
import No4desimal from './praktikum1/no4desimal'
import No4biner from './praktikum1/no4biner'
import No4hexadesimal from './praktikum1/no4hexadesimal'
import No4oktal from './praktikum1/no4oktal'


ReactDOM.render(
  <React.StrictMode>
    <No4biner />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
