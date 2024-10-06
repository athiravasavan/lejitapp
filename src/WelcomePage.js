import React from 'react';
import './WelcomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGavel } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = () => {
    const handleCitizenClick = () => {
        window.location.href = '/citizen-signup';
    };

    const handleLawFirmClick = () => {
        window.location.href = '/lawfirm-signup';
    };

    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    return (
        <div className="welcome-container">
            <h1>Welcome to Lawyer App</h1>
            <p>Your trusted legal companion</p>

            {/* Replace the button container with inline styles */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
                <button onClick={handleCitizenClick} className="portal-button">
                    <FontAwesomeIcon icon={faUser} /> Citizen
                </button>
                <button onClick={handleLawFirmClick} className="portal-button">
                    <FontAwesomeIcon icon={faGavel} /> Lawyer
                </button>
            </div>

            <div className="login-actions">
                
                <p>or</p>
                <button onClick={handleLoginClick} className="login-button">
                    Login Here
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
