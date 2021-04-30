import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';

function App() {
  return (
    <>
    <Router>
    <Navibar/>
      <Switch>
        <Route exect path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
