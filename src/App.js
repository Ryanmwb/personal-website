import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import TopNavigation from './components/TopNavigation'
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Route path="/" component={TopNavigation} />
          <Route path="/test" component={Test} />
        </header>
      </div>
    );
  }
}

export default App;
