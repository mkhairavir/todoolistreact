import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionBase from './component/FunctionBase';
import Navigasi from './component/Navigasi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import './App.scss';
import ClassBase from './component/ClassBase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div> 
      <div>
        <Router>
          <Navigasi />
            <Switch>
            <Route path="/" exact component={FunctionBase} />
            <Route path="/classbase" exact component={ClassBase} />
            </Switch>
            <Footer />
          </Router>
      </div>
    </div>
  );
}

export default App;
