import React, { useState } from "react";
import './footer.css'

function Footer (props) {
  
    return (
        <div id="footer" className="container">
                <>
                <img className="githubIcon" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"></img>
                    <a className="githubLink" href="https://github.com/Julio-M">XHULIO</a>   | 
                    <a className="githubLink" href="https://github.com/cadakris">   KRISTEN</a>
                </>
        </div>
    );
}

export default Footer;