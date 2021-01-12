import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GeneralProvider from './context/general/GeneralProvider';

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
