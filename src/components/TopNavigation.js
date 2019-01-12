import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopNavigation extends Component {
    render(){
        return(
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
        )
    }
}

export default TopNavigation;