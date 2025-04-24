import './NavBar.css';
import React, { useState, useRef, useEffect } from "react";
import cog from '../cog.png';
import './About.css';
import { Link } from 'react-router-dom';
import worm from '../Picture1.png';



function About() {
    return (
        // <div className="about-container">
        //     <div className="text-cont">
        //         <div id="Latest-Content-Header" class="div-block-65">
        //             <h2 class="notion-pack-header">
        //                 About Me
        //             </h2>
        //             <div class="latest-content-underline2"></div>
        //         </div>
        //         <div className='text-box'>
        //             <p>
        //                 Hey there! I'm a (almost) Computer Science graduate from the University of Texas at San Antonio, originally from El Paso, TX. 
        //                 My passion lies in creating tech that’s both impactful and accessible, from full-stack web applications 
        //                 to reverse engineering and AI-driven tools.
        //             </p>
        //             <p>
        //                 I've worked on a variety of projects that explore software engineering, AI, infrastructure, and cybersecurity. 
        //                 I enjoy solving complex problems and turning creative ideas into real world solutions. Whether it's building scalable apps, 
        //                 diving deep into data, or learning new tech stacks, I’m all about staying curious and hands-on.
        //             </p>
        //             <p>
        //                 I’m also preparing to begin a master’s program in Artificial Intelligence in Analytics, 
        //                 where I hope to further explore the ways intelligent systems can support decision-making and innovation.
        //             </p>
        //             <p>
        //                 Thanks for stopping by! Let’s connect and build something great!
        //             </p>
        //             {/* <div className="headshot-cont">
        //                 <img src={worm} loading="lazy" alt="Sofia Hernandez" class="worm-image" className="h-10" />
        //             </div> */}
        //             <div className="social-links">
        //                 <a href="https://github.com/sghdz019" target="_blank" rel="noopener noreferrer" className="social-box github">
        //                     GitHub
        //                 </a>
        //                 <a href="https://www.linkedin.com/in/sofia-hernandez-95a837213" target="_blank" rel="noopener noreferrer" className="social-box linkedin">
        //                     LinkedIn
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div class="about-section">
            <div class="container-12 w-container">
                <h2 class="heading-16">
                    About
                </h2>
                <div class="about-section-unde"></div>

                <img src={worm} alt="Sam Dickie laptop illustration" class="image-wrap"></img>
                
                <p id="w-node-_363cdd22-8538-dc88-f2fd-f5e3f17d17bb-8d4a8591" class="paragraph-7">
                    Hey there! I'm a (almost) Computer Science graduate from the University of Texas at San Antonio, originally from El Paso, TX. 
                    My passion lies in creating tech that’s both impactful and accessible, from full-stack web applications 
                    to reverse engineering and AI-driven tools.
                </p>
                <p class="paragraph-7">
                    I've worked on a variety of projects that explore software engineering, AI, infrastructure, and cybersecurity. 
                    I enjoy solving complex problems and turning creative ideas into real world solutions. Whether it's building scalable apps, 
                    diving deep into data, or learning new tech stacks, I’m all about staying curious and hands-on.
                </p>
                <p class="paragraph-7">
                    I’m also preparing to begin a master’s program in Artificial Intelligence in Analytics, 
                    where I hope to further explore the ways intelligent systems can support decision-making and innovation.
                </p>
                <p class="paragraph-7">
                    Thanks for stopping by! Let’s connect and build something great!
                </p>
            </div>
            <div className='about-buttons'>
                <div class="button-container">
                    <a href="https://github.com/sghdz019" target="_blank" rel="noopener noreferrer">
                        <button class="button-74" role="button">GitHub</button>
                    </a>
                </div>
                <div class="button-container">
                    <a href="https://www.linkedin.com/in/sofia-hernandez-95a837213" target="_blank" rel="noopener noreferrer">
                        <button class="button-74" role="button">LinkedIn</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;

