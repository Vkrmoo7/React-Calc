import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>D4x-!</h1>
            </div>

            <button className="navbar-toggle" onClick={toggleNavbar}>
                ☰
            </button>

            <ul className={`navbar-links ${isActive ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={toggleNavbar}>Home</Link>
                </li>
                <li>
                    <Link to="/calculators" onClick={toggleNavbar}>Calculators</Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleNavbar}>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
