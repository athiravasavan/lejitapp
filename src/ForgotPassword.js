import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './styles.css'; // Ensure you have relevant styles

const ForgotPassword = () => {
    const [identifier, setIdentifier] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSendCode = (e) => {
        e.preventDefault();
        console.log("Send verification code to:", identifier);
        
        // Navigate to verification code page after sending the code
        navigate('/verification-code'); // Ensure this path is also defined in your routes
    };

    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <p>Enter your email or phone number to receive a verification code.</p>
            <form onSubmit={handleSendCode} className="signup-form">
                <input 
                    type="text" 
                    placeholder="Email or Phone Number" 
                    value={identifier} 
                    onChange={(e) => setIdentifier(e.target.value)} 
                    required 
                />
                <button type="submit">Send Verification Code</button>
            </form>
        </div>
    );
};

export default ForgotPassword;

