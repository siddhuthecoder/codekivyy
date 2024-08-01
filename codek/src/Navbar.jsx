import React from 'react';
import logo from './assets/code-kivy.jpg'

import './Nav.css'
const Navbar = () => {
  return (
    <>
    
    <header>
        <div class="nav-wrapper">
            <div class="logo-container">
                <img class="logo" src={logo} alt="Logo"/>
            </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle"/>
                <label class="menu-btn" for="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                        <li class="nav-tab">Home</li>
                        <li class="nav-tab">About</li>
                        <li class="nav-tab">Course</li>
                        <li class="nav-tab">Team</li>
                        <li class="nav-tab">Reviews</li>
                        <li class="nav-tab">Contact  </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar