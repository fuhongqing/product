

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';

import Pcontent from './components/Pcontent';

import './assets/css/index.css'

class App extends Component {

  render() {
    return (

      <Router>
        <div>
             
          <Route exact path="/" component={Home} />
          <Route path="/pcontent/:id" component={Pcontent} />
         
        </div>
      </Router>
    );
  }
}

export default App;
