import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Gestionar from './components/gestionar'
import Alta from './components/alta'

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/gestionar'} component={Gestionar} />
      <Route exact path={'/alta'} component={Alta} />
    </Router>
  );
}

export default App;
