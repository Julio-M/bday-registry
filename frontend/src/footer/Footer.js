import React, { useState } from "react";
import './footer.css'
import {FaGithub} from 'react-icons/fa';

function Footer (props) {
  
    return (
        <div id="footer" className="container">
                <div className='content'>
                    <FaGithub id='githublogo'/>
                    <a className="githubLink" href="https://github.com/Julio-M" target="_blank" rel="noopener noreferrer">XHULIO</a>   | 
                    <a className="githubLink" href="https://github.com/cadakris" target="_blank" rel="noopener noreferrer">   KRISTEN</a>
                </div>
        </div>
    );
}

export default Footer;