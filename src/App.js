import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CitizenSignUp from './CitizenSignUp';
import LawFirmSignUp from './LawFirmSignUp';
import LoginPage from './LoginPage';
import OTPInput from './OTPInput';
import ForgotPassword from './ForgotPassword';
import DetailedSignUp from './DetailedSignUp';
import './App.css'; // Optional: Your global styles

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/citizen-signup" element={<CitizenSignUp />} />
                    <Route path="/otp-input" element={<OTPInput />} />
                    <Route path="/lawfirm-signup" element={<LawFirmSignUp />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/detailed-signup" element={<DetailedSignUp />} /> 
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
