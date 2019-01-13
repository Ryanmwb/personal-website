import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Test from './components/About';
import Landing from './components/Landing';
import logo from './rw.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="mb-0">
          <div> 
            <nav class="navbar navbar-expand lg navbar-light fixed-top text-sm pt-2 pb-2">
                <img src={logo} alt="RW logo" class="logo"></img>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <Link to="/" class="nav-link text-light link">Home</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/test" class="nav-link text-light link">About</Link>
                      </li>
                    </ul>
                </div>
            </nav>
          </div>
        </header>
        <main class="mt-0">
          <Route exact path="/" component={Landing}/>
          <Route path="/test" component={Test}/>
        </main>
      </div>
    );
  }
}

export default App;
