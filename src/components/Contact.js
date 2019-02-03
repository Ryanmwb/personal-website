import React, { Component } from 'react';
import Navbar from './Navbar'

class Contact extends Component { 
    render() {
        return(
            <div>
                <Navbar />
                <main class="mt-0">
                    <div class="landing">
                        <div class="color">
                            <h1 class="display-3 pt-5 title ">Contact Me</h1>
                            <p class="text-light h2 slogan">Web Development Re<span class="h2 imagine">IMAGINED</span></p>
                        </div>
                    </div>
                </main>
            </div> 
        )
    }
}

export default Contact;