import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*************Dependencies*******************/

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*************BootStrap and css*******************/

import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import About from './Component/Pages/About';
import Navbar from './Component/Layout/NavBar';
import NotFound from './Component/Pages/NotFound';
import AddUser from './Component/User/AddUser';
/*************Components*******************/





function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />  {/* For all pages and route thats why outside the switch */}
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user" component={AddUser} />
          <Route exact path="/user/:id" component={AddUser} />
          
          
          
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
