import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import Google and Facebook icons
import './styles.css'; // Import your styles

const LoginPage = () => {
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
        console.log("Form submitted:", { firstName, lastName, email, password });
    };

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
        // Implement Google login logic here
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
        // Implement Facebook login logic here
    };

    return (
        <div className="container">
            <h1>Create an account</h1>
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
                <button type="submit">Sign Up</button>
                
                 or
            </form>

            {/* Add social login options */}
            <div className="social-login">
                <button onClick={handleGoogleLogin} className="social-button google-button">
                    <FontAwesomeIcon icon={faGoogle} /> Login with Google
                </button>
                <button onClick={handleFacebookLogin} className="social-button facebook-button">
                    <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
                </button>
            </div>
        </div>
    );
};

export default LoginPage;

