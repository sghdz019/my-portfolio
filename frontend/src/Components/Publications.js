import './NavBar.css';
import React, { useState, useRef, useEffect } from "react";
import cog from '../cog.png';
import './Publications.css';
import { Link } from 'react-router-dom';
import worm from '../worm.png';



function Publications() {
    return (
        <div className="publications-container">
            <div data-w-id="2e20be0c-df13-322d-9b75-cd23ed0e865a"  class="container-8 w-container">
                <div id="Latest-Content-Header" class="div-block-65">
                    <h2 class="notion-pack-header">
                        Publications
                    </h2>
                    <div class="latest-content-underline"></div>
                </div>
            </div>
            <div class="pub1-section">
                <div class="container-33 w-container">
                    <div class="w-layout-grid download-grid">
                        <div class="pub-image"></div>
                        <div class="box-right-section">
                            <div class="text-block-wrapper">
                                <div class="pill-wrapper">
                                    <div class="free-pill">
                                        Published
                                    </div>
                                </div>
                                <h2 class="download-modal-heading">
                                    Amplifying Voices Through Animaker Animation
                                </h2>
                                <div class="text-block-24">
                                    <strong class="bold-text-20">
                                        Results from a Longitudinal Study with Latino/a/x Engineering Students
                                    </strong>
                                </div>
                                <div class="text-block-25">
                                    This IEEE special session shares findings from a study using Chicana 
                                    Feminist Epistemology to elevate Latino/a/x voices in engineering 
                                    education. Using Platicas and Testimonios turned into Animaker videos, 
                                    the session challenges traditional research norms while highlighting 
                                    student stories and asset-based research approaches.
                                </div>
                            </div>
                            <a href="https://ieeexplore.ieee.org/document/10893590" class="pub-button w-button" target="_blank" rel="noopener noreferrer">
                                Click Here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="pub2-section">
                <div class="container-33 w-container">
                    <div class="w-layout-grid download-grid">
                        <div class="pub-image"></div>
                        <div class="box-right-section">
                            <div class="text-block-wrapper">
                                <div class="pill-wrapper">
                                    <div class="premium-pill">
                                        Ongoing
                                    </div>
                                </div>
                                <h2 class="download-modal-heading">
                                    Amplifying Voices Through Animaker Animation
                                </h2>
                                <div class="text-block-24">
                                    <strong class="bold-text-20">
                                        Results from a Longitudinal Study with Latino/a/x Engineering Students
                                    </strong>
                                </div>
                                <div class="text-block-25">
                                    This IEEE special session shares findings from a study using Chicana 
                                    Feminist Epistemology to elevate Latino/a/x voices in engineering 
                                    education. Using Platicas and Testimonios turned into Animaker videos, 
                                    the session challenges traditional research norms while highlighting 
                                    student stories and asset-based research approaches.
                                </div>
                            </div>
                            <a href="https://ieeexplore.ieee.org/document/10893590" class="pub-button w-button" target="_blank" rel="noopener noreferrer">
                                Click Here
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Publications;

