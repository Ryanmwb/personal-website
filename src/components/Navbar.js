import React, { Component } from 'react';
import logo from './rw.png';
import {Link} from 'react-router-dom'

class Navbar extends Component { 
    render() {
        return(
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
        )
    }
}

export default Navbar;