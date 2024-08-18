import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>

    </nav>

);

export default Navbar