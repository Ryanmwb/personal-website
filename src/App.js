import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Test from './components/Test'
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div > 
            <nav class="navbar navbar-expand lg navbar-light bg-light fixed-top">
                <a class="navbar-brand display-6" href="/">Ryan's Site</a>
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
        <main>
          <Route exact path="/" component={Landing}/>
          <Route path="/test" component={Test}/>
        </main>
      </div>
    );
  }
}

export default App;
