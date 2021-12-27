import React from 'react';
import {BrowserRouter as Router,Route,} from 
'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Gestionar from './components/personal/gestionar'
import Alta from './components/personal/alta'
import Contacto from './components/contacto'
//import Modificar from './components/modificar'

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/gestionar'} component={Gestionar} />
      <Route exact path={'/alta'} component={Alta} />
      {/* <Route exact path={'/modificar'} component={Modificar} /> */}
      <Route exact path={'/contacto'} component={Contacto} />
    </Router>
  );
}

export default App;
