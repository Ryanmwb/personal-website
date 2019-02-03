import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Test from './components/About';
import Landing from './components/Landing';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="/test" component={Test}/>
          <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
