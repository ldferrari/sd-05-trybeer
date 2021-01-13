import React from 'react';
import Home from './pages/Home';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <Home />
  </Provider>
);

export default App;
