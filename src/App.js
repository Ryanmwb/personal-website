import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Test from './components/About';
import Landing from './components/Landing';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="/test" component={Test}/>
      </div>
    );
  }
}

export default App;
