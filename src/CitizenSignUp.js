import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import Google and Facebook icons
import { Link } from 'react-router-dom';
import './styles.css'; // Import the styles

const CitizenSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log("Form submitted:", { email, password });
    };

    return (
        <div className="container">
            <h1>Lawyer App</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="input-group">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>

            <div className="alternate-login">
                <p>
                    <Link to="/forgot-password" className="link">Forgot Password?</Link>
                </p>
                <h2>Or</h2>
                <button className="google-login">
                    <FontAwesomeIcon icon={faGoogle} className="icon" /> Google
                </button>
                <button className="linkedin-login">
                    <FontAwesomeIcon icon={faFacebook} className="icon" /> Facebook
                </button>
            </div>

            <div className="footer">
                <p>
                    Don't have an account? 
                    <Link to="/detailed-signup" className="link"> Sign Up</Link> {/* This will now route to the detailed sign-up */}
                </p>
            </div>
        </div>
    );
};

export default CitizenSignUp;
