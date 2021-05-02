import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';

function App() {
  return (
    <>
      <div className="background">
        <Router>
        <Navibar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/users" component={Users}/>
              <Route path="/about" component={About}/>
            </Switch>
        </Router>
        <div className="footer"><Footer/></div>
      </div>  
    </>
  );
}

export default App;
