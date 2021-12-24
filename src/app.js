import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Gestionar from './components/gestionar'
import Alta from './components/alta'
import Contacto from './components/contacto'

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/gestionar'} component={Gestionar} />
      <Route exact path={'/alta'} component={Alta} />
      <Route exact path={'/contacto'} component={Contacto} />
    </Router>
  );
}

export default App;
