// POSSIVEL FLUXO

// import React from 'react';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import './App.css';
// import Provider from './context/Provider';

// // import Login from './pages/Login';

// function App() {
//   return (
//     <div>
//       <span>TryBeer</span>
//       <Provider>
//         <BrowserRouter>
//           <Switch>
//             <Route exact path="/login" component={Login} />

//           </Switch>
//         </BrowserRouter>
//       </Provider>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
