import './NavBar.css';
import React, { useState, useRef, useEffect } from "react";
import cog from '../cog.png';
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {
    return(
        <div class="intro-container">
            <div className="gear-container">
                <img
                src={cog}
                alt="Rotating Cog"
                className="rotating-gear rotate"
                />
            </div>
            <h1>Howdy!</h1>
            <h1>My name is Sofia.</h1>
            <p>Come check out my website.</p>
            <p>Feel free to scroll.</p>
            <div class="button-container">
                <Link to="./projects">
                <button class="button-74" role="button">Projects!</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;


