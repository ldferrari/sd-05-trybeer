import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import Provider from './context/AppProvider';

import Rotas from './routes';

import './App.css';

const App = () => (
  <div id="div-principal">
    <Provider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
