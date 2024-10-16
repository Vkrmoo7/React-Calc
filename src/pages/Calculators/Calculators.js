import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Calculators.css';

const Calculators = () => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [isSwipedUp, setIsSwipedUp] = useState(false);
    let touchStartY = 0;

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50) {
            // Swipe Up
            setIsSwipedUp(true);
        } else if (touchEndY - touchStartY > 50) {
            // Swipe Down
            setIsSwipedUp(false);
        }
    };

    return (
        <div className="dashboard-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {/* Sidebar for desktop and larger screens */}
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <h2>Available Calculators</h2>
                <button className="toggle-button" onClick={toggleSidebar}>
                    ☰
                </button>
                <ul className="calculator-list">
                    <li>
                        <Link to="basic">
                            <i className="fas fa-calculator"></i> <span>Basic Calculator</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="bmi">
                            <i className="fas fa-weight"></i> <span>BMI Calculator</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="age">
                            <i className="fas fa-birthday-cake"></i> <span>Age Calculator</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="expense">
                            <i className="fas fa-money-bill-wave"></i> <span>Expense Manager</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Swipe-up drawer for mobile view */}
            <div className={`swipe-up-panel ${isSwipedUp ? 'visible' : ''}`}>
                <div className="swipe-handle"></div>
                <ul className="calculator-list-mobile">
                    <li>
                        <Link to="basic">
                            <i className="fas fa-calculator"></i> <span>Basic</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="bmi">
                            <i className="fas fa-weight"></i> <span>BMI</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="age">
                            <i className="fas fa-birthday-cake"></i> <span>Age</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="expense">
                            <i className="fas fa-money-bill-wave"></i> <span>Expense</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="working-area">
                <Outlet />
            </div>
        </div>
    );
};

export default Calculators;
