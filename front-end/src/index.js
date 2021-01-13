import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/client/ClientProvider';
import App from './App';
import GeneralProvider from './context/general/GeneralProvider';

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
