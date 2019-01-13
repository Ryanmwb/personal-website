import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Test from './components/Test'
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="mb-5">
          <div > 
            <nav class="navbar navbar-expand lg navbar-light bg-light fixed-top">
                <Link to="/">Ryan's Site</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to="/test">Test</Link>
                        </li>
                    </ul>
                </div>
            </nav>
          </div>
        </header>
        <main class="mt-1">
          <Route exact path="/" component={Landing}/>
          <Route path="/test" component={Test}/>
        </main>
      </div>
    );
  }
}

export default App;
