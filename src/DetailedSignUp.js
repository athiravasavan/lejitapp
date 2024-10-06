import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import Google and Facebook icons
import './styles.css'; // Import the styles

const DetailedSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Handle the form submission logic here
        console.log("Form submitted:", { firstName, lastName, email, password });
    };

    const handleGoogleLogin = () => {
        // Add your Google OAuth login logic here
        console.log("Google login clicked");
    };

    const handleFacebookLogin = () => {
        // Add your Facebook OAuth login logic here
        console.log("Facebook login clicked");
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
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
                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Let's Get Started</button>
                <p>or</p>
            </form>

                <button className="google-login">
                    <FontAwesomeIcon icon={faGoogle} className="icon" /> Google
                </button>
                <button className="linkedin-login">
                    <FontAwesomeIcon icon={faFacebook} className="icon" /> Facebook
                </button>
            
        </div>
    );
};

export default DetailedSignUp;

