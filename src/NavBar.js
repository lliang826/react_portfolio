import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Lawrence Liang</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <a class="nav-item nav-link" href="/Projects">Projects</a>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="https://www.linkedin.com/in/lawrence-liang/" target="_blank" rel="noreferrer" class="fa fa-linkedin"></a>
                <a href="https://github.com/lliang826" target="blank" rel="noreferrer" class="fa fa-github"></a>
            </div>
        </div>
    </nav>
);
export default NavBar;
