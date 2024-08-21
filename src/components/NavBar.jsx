import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navBar">
        <ul className="navBar-list">
            <li className="navBar-item"><Link to="/">Home</Link></li>
            <li className="navBar-item"><Link to="/pokemon">Pokemon</Link></li>
            <li className="navBar-item"><Link to="/about">About</Link></li>
        </ul>

    </nav>

);

export default Navbar