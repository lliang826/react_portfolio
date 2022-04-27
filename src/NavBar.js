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
            <div class="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <a class="nav-item nav-link" href="about.html">About Me</a>
                <a class="nav-item nav-link" href="projects.html">Projects</a>
                <a class="nav-item nav-link" href="blog.html">Blog</a>
                <a class="nav-item nav-link" href="contact.html">Contact Me</a>
            </div>
        </div>
    </nav>
);
export default NavBar;
