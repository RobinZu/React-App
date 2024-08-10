import React from "react";
import { Link } from 'react-router-dom';

function Navbar (props) {
    return(
        <nav>
        <div className = "navbar">
            <h1><strong> {props.appName}</strong></h1>
            <img src={props.picture} />
            <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
            
        </div>
        </nav>
    );
}

export default Navbar;