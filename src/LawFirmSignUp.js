import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './styles.css'; // Import your CSS styles

const LawFirmSignUp = () => {
    const [showLawFirmRegistration, setShowLawFirmRegistration] = useState(false);
    const [showInviteForm, setShowInviteForm] = useState(false);
    const [showOAuthSection, setShowOAuthSection] = useState(false); // Define OAuth section state

    const [formData, setFormData] = useState({
        firmName: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        adminName: '',
        adminEmail: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        practiceAreas: '',
        websiteUrl: '',
        consent: false,
        lawyerEmail: '',
        lawyerRole: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Law Firm Registration Data:', formData);
        // Handle law firm registration submission logic here
    };

    const handleInviteSubmit = (e) => {
        e.preventDefault();
        console.log('Invite Data:', {
            lawyerEmail: formData.lawyerEmail,
            lawyerRole: formData.lawyerRole,
        });
        // Handle invite submission logic here
    };

    return (
        <div className="wrapper">
            <div className="container">
                {/* Button Group: Law Firm Registration, Admin Section, and OAuth */}
                {!showLawFirmRegistration && !showInviteForm && !showOAuthSection && (
                    <div className="button-group">
                        <button 
                            type="button" 
                            onClick={() => {
                                setShowLawFirmRegistration(true);
                                setShowInviteForm(false);
                                setShowOAuthSection(false);
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
                            }}
                            className="btn-primary"
                        >
                            OAuth Section
                        </button>
                    </div>
                )}

                {/* OAuth Section */}
                {showOAuthSection && (
                    <div className="oauth-section">
                        <h2>OAuth Login</h2>
                        <p>Here you can add OAuth providers (Google, LinkedIn, etc.)</p>
                        <button type="button" onClick={() => setShowOAuthSection(false)}>Go Back</button>
                    </div>
                )}

                {/* Law Firm Registration Form */}
                {showLawFirmRegistration && (
                    <div className="lawfirm-registration">
                        <h2>Law Firm Registration</h2>
                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="form-group">
                                <label htmlFor="firmName">Law Firm Name</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    <input
                                        type="text"
                                        id="firmName"
                                        name="firmName"
                                        value={formData.firmName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="streetAddress">Firm Address</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                    <input
                                        type="text"
                                        id="streetAddress"
                                        name="streetAddress"
                                        placeholder="Street Address"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        placeholder="State/Province"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        placeholder="ZIP/Postal Code"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="adminName">Admin Name</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    <input
                                        type="text"
                                        id="adminName"
                                        name="adminName"
                                        value={formData.adminName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="adminEmail">Admin Email</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                    <input
                                        type="email"
                                        id="adminEmail"
                                        name="adminEmail"
                                        value={formData.adminEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faPhone} className="input-icon" />
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="practiceAreas">Practice Areas</label>
                                <input
                                    type="text"
                                    id="practiceAreas"
                                    name="practiceAreas"
                                    placeholder="e.g., Family Law, Criminal Law"
                                    value={formData.practiceAreas}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="websiteUrl">Website URL (Optional)</label>
                                <input
                                    type="url"
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    value={formData.websiteUrl}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="consent">I agree to the terms and conditions</label>
                            </div>

                            <button type="submit" className="signup-button">Register</button>
                        </form>
                    </div>
                )}

                {/* Admin Invite Form */}
                {showInviteForm && (
                    <div className="invite-form">
                        <h2>Design Invite</h2>
                        <form onSubmit={handleInviteSubmit} className="invite-form-content">
                            <div className="form-group">
                                <label htmlFor="lawyerEmail">Lawyer's Email</label>
                                <input
                                    type="email"
                                    id="lawyerEmail"
                                    name="lawyerEmail"
                                    value={formData.lawyerEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lawyerRole">Lawyer's Role</label>
                                <input
                                    type="text"
                                    id="lawyerRole"
                                    name="lawyerRole"
                                    value={formData.lawyerRole}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="invite-button">Send Invite</button>
                            <button type="button" onClick={() => setShowInviteForm(false)}>Go Back</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LawFirmSignUp;

