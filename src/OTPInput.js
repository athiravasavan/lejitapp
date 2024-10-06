import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CitizenSignUp from './CitizenSignUp';
import LawFirmSignUp from './LawFirmSignUp';
import ForgotPassword from './ForgotPassword';
import LoginPage from './LoginPage';  // Correctly import the LoginPage component
import OTPInput from './OTPInput';      // Correctly import the OTPInput component
import './App.css'; // Optional: Your global styles

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/citizen-signup" element={<CitizenSignUp />} />
                    <Route path="/lawfirm-signup" element={<LawFirmSignUp />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/login" element={<LoginPage />} />  // This should be the LoginPage component
                    <Route path="/otp-input" element={<OTPInput />} />  // This should be the OTPInput component
                </Routes>
            </div>
        </Router>
    );
};

export default App;
