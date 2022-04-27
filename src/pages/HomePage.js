import React from 'react';
import skiing from '../img/skiing.jpg';
import TypeWriter from '../scripts/typewriter';
import { useEffect } from 'react';

const HomePage = () => {
    const data = [
        "Hi there! My name is Lawrence Liang",
        "I am a software developer",
        "Welcome to my website"];

    // useEffect(() => {
    //     const script = document.createElement("script")

    //     script.src = { TypeWriter }
    // })

    return (
        <React.Fragment>
            <div id="welcome">
                <img src={skiing} id="skiing" alt="Skiing"/>
                <a href="/" class="typewrite" data-period="2000" data-type={data}>
                    <span class="wrap"></span>
                </a>
            </div>
        </React.Fragment>
    );
}

export default HomePage;
