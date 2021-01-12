import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TrybeerProvider from './context/TrybeerProvider';
// import PossivelOutroProvider from './context/PossivelOutroProvider';
// Caso for preciso fazer mais de um provider e contexto
// por critério de legibilidade de código,
// A solução é importar todos e embalar um Provider dentro do outro aqui.

ReactDOM.render(
  // <PossivelOutroProvider>
  <TrybeerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TrybeerProvider>,
  // </PossivelOutroProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
