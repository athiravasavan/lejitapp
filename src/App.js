import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CitizenSignUp from './CitizenSignUp';
import LawFirmSignUp from './LawFirmSignUp';
import LoginPage from './LoginPage';
import OTPInput from './OTPInput';
import ForgotPassword from './ForgotPassword';
import DetailedSignUp from './DetailedSignUp';
import LawyersList from './LawyersList'; // Default import
import LawyerProfile from './LawyerProfile'; // Default import
import './App.css'; // Optional: Your global styles

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Define your app's routes */}
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/citizen-signup" element={<CitizenSignUp />} />
                    <Route path="/otp-input" element={<OTPInput />} />
                    <Route path="/lawfirm-signup" element={<LawFirmSignUp />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/detailed-signup" element={<DetailedSignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />

                    {/* List of registered lawyers */}
                    <Route path="/lawyers" element={<LawyersList />} />

                    {/* Lawyer profile: View and Edit based on the URL */}
                    <Route path="/lawyer/:id/view" element={<LawyerProfile isEdit={false} />} />
                    <Route path="/lawyer/:id/edit" element={<LawyerProfile isEdit={true} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
