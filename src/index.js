import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render("Hola Mundo");

const NombreComponente = ({text}) => {
  return (
    <button>
      {text}
    </button>
  )
} 



root.render(

  <React.Fragment>
    <NombreComponente text="Boton 1 COmponent"></NombreComponente>
    <NombreComponente text="Boton 2 COmponent"></NombreComponente>
    {NombreComponente({text: 'boton 4'})}
    {NombreComponente({text: 'boton 3'})}
  </React.Fragment>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
