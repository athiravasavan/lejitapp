import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faPhone, faLock, faGlobe, faGavel } from '@fortawesome/free-solid-svg-icons';
import LawyersList from './LawyersList'; // Import LawyersList
import './styles.css'; // Import your CSS styles

const LawFirmSignUp = () => {
    const [showLawFirmRegistration, setShowLawFirmRegistration] = useState(false);
    const [showInviteForm, setShowInviteForm] = useState(false);
    const [showOAuthSection, setShowOAuthSection] = useState(false);
    const [showLawyerProfiles, setShowLawyerProfiles] = useState(false);

    const [formData, setFormData] = useState({
        firmName: '',
        firmAddress: '',
        firmPhone: '',
        adminName: '',
        adminEmail: '',
        password: '',
        confirmPassword: '',
        practiceAreas: '', // New practice area field
        websiteUrl: '', // New website URL field
        consent: false, // New checkbox field
        lawyerEmail: '',
        lawyerRole: '',
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    // Handle law firm registration form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Law Firm Registration Data:', formData);
        // You can make an API call or handle registration here
    };

    // Handle invite form submission
    const handleInviteSubmit = (e) => {
        e.preventDefault();
        console.log('Invite Data:', {
            lawyerEmail: formData.lawyerEmail,
            lawyerRole: formData.lawyerRole,
        });
        // You can make an API call or handle invite sending here
    };

    return (
        <div className="wrapper">
            <div className="container">
                {!showLawFirmRegistration && !showInviteForm && !showOAuthSection && !showLawyerProfiles && (
                    <div className="button-group">
                        <button 
                            type="button" 
                            onClick={() => {
                                setShowLawFirmRegistration(true);
                                setShowInviteForm(false);
                                setShowOAuthSection(false);
                                setShowLawyerProfiles(false);
                            }}
                            className="btn-primary"
                        >
                            Law Firm Registration
                        </button>
                        <button 
                            type="button" 
                            onClick={() => {
                                setShowInviteForm(true);
                                setShowLawFirmRegistration(false);
                                setShowOAuthSection(false);
                                setShowLawyerProfiles(false);
                            }}
                            className="btn-primary"
                        >
                            Admin Section
                        </button>
                        <button 
                            type="button" 
                            onClick={() => {
                                setShowOAuthSection(true);
                                setShowLawFirmRegistration(false);
                                setShowInviteForm(false);
                                setShowLawyerProfiles(false);
                            }}
                            className="btn-primary"
                        >
                            OAuth Section
                        </button>
                        <button 
                            type="button" 
                            onClick={() => {
                                setShowLawyerProfiles(true);
                                setShowLawFirmRegistration(false);
                                setShowInviteForm(false);
                                setShowOAuthSection(false);
                            }}
                            className="btn-primary"
                        >
                            Lawyer Profiles
                        </button>
                    </div>
                )}

                {/* OAuth Section */}
                {showOAuthSection && (
                    <div className="oauth-section">
                        <h2>OAuth Login</h2>
                        <button type="button" onClick={() => setShowOAuthSection(false)}>Go Back</button>
                    </div>
                )}

                {/* Law Firm Registration Form */}
                {showLawFirmRegistration && (
                    <div className="lawfirm-registration">
                        <h2>Law Firm Registration</h2>
                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="form-group">
                                <label htmlFor="firmName">Firm Name:</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    <input
                                        type="text"
                                        name="firmName"
                                        value={formData.firmName}
                                        onChange={handleInputChange}
                                        placeholder="Enter law firm name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firmAddress">Firm Address:</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                    <input
                                        type="text"
                                        name="firmAddress"
                                        value={formData.firmAddress}
                                        onChange={handleInputChange}
                                        placeholder="Enter law firm address"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firmPhone">Phone no:</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faPhone} className="input-icon" />
                                    <input
                                        type="text"
                                        name="firmPhone"
                                        value={formData.firmPhone}
                                        onChange={handleInputChange}
                                        placeholder="Enter law firm phone number"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm password"
                                        required
                                    />
                                </div>
                            </div>

                            {/* New Practice Areas Field */}
                            <div className="form-group">
                                <label htmlFor="practiceAreas">Practice Areas:</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faGavel} className="input-icon" />
                                    <input
                                        type="text"
                                        name="practiceAreas"
                                        value={formData.practiceAreas}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Family Law, Criminal Law"
                                    />
                                </div>
                            </div>

                            {/* New Website URL Field */}
                            <div className="form-group">
                                <label htmlFor="websiteUrl">Website URL (Optional):</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faGlobe} className="input-icon" />
                                    <input
                                        type="url"
                                        name="websiteUrl"
                                        value={formData.websiteUrl}
                                        onChange={handleInputChange}
                                        placeholder="Enter your firm's website URL"
                                    />
                                </div>
                            </div>

                            {/* New Terms & Conditions Checkbox */}
                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="consent">I agree to the terms and conditions</label>
                            </div>

                            <button type="submit" className="signup-button">Register</button>
                            <button type="button" onClick={() => setShowLawFirmRegistration(false)}>Go Back</button>
                        </form>
                    </div>
                )}

                {/* Admin Invite Form */}
                {showInviteForm && (
                    <div className="invite-form">
                        <h2>Design Invite</h2>
                        <form onSubmit={handleInviteSubmit} className="invite-form-content">
                            <div className="form-group">
                                <label>Lawyer Email:</label>
                                <input
                                    type="email"
                                    name="lawyerEmail"
                                    value={formData.lawyerEmail}
                                    onChange={handleInputChange}
                                    placeholder="Enter lawyer's email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Lawyer Role:</label>
                                <input
                                    type="text"
                                    name="lawyerRole"
                                    value={formData.lawyerRole}
                                    onChange={handleInputChange}
                                    placeholder="Enter lawyer's role"
                                    required
                                />
                            </div>
                            <button type="submit" className="invite-button">Send Invite</button>
                            <button type="button" onClick={() => setShowInviteForm(false)}>Go Back</button>
                        </form>
                    </div>
                )}

                {/* Lawyer Profiles Section */}
                {showLawyerProfiles && (
                    <div className="lawyer-profiles">
                        <h2>Registered Lawyers</h2>
                        <LawyersList /> {/* Render the LawyersList component here */}
                        <button type="button" onClick={() => setShowLawyerProfiles(false)}>Go Back</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LawFirmSignUp;

               
                                  
