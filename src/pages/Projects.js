import React from 'react';
import CSTBuddy from '../img/CSTBuddy.PNG';

const HomePage = () => (
    <React.Fragment>
    <div id="projects">
        <h1>Projects</h1>
        <div class="projectImg" id="CSTBuddyImg">
            <a href="https://github.com/lliang826/COMP1800" target="_blank" rel="noreferrer">
                <img src={CSTBuddy} id="cstbuddy" alt="CST Buddy" />
            </a>
        </div>
        <div class="projectText" id="CSTBuddyText">
            <h3>
                <a href="https://github.com/lliang826/COMP1800" target="_blank" rel="noreferrer">
                    <u>CST Buddy</u>
                </a>
            </h3>
            <h5>HTML / CSS / JavaScript / Firebase / Bootstrap</h5>
            <p>
                Developed in a group of three for my COMP 1800 Projects 1 class. CST Buddy is a chatbot web 
                application that allows users to search for information related to the BCIT CST
                program. Users can search from various topics to receive a short summary and a link for more 
                information.
                <br></br>
                I was responsible for creating chatbot responses, which pulled information from Firebase 
                based on user input, and hosting the app onto Firebase. I also helped create search lists,
                which returned a list of topics based on views or likes.
                <br></br>
                I also designed the homepage, and I had to do multiple things to make the application 
                user-friendly and intuitive. For example, I created an error case to handle any illegal inputs
                and a set of instructions at the bottom of the page.
            </p>
        </div>
    </div>
    </React.Fragment>
);

export default HomePage;
