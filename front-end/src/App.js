import React from 'react';
import MenuSuperior from './components/client/MenuSuperior';
import MenuLateral from './components/client/MenuLateral';

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <MenuLateral/>
      <h1>Body</h1>
    </div>
  );
}

export default App;
