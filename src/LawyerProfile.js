import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import any required styles

const LawyerProfile = ({ isEdit }) => {
    const { id } = useParams(); // Get the lawyer ID from the URL
    const [lawyer, setLawyer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
    });

    useEffect(() => {
        fetch(`/api/lawyers/${id}`) // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                setLawyer(data);
                setFormData({
                    name: data.name,
                    email: data.email,
                    role: data.role,
                });
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to fetch lawyer details");
                setLoading(false);
            });
    }, [id]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/lawyers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                alert("Lawyer profile updated successfully");
            })
            .catch(error => {
                alert("Failed to update profile");
            });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="lawyer-profile">
            {isEdit ? (
                <form onSubmit={handleSubmit}>
                    <h2>Edit Lawyer Profile</h2>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Role</label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="update-button">Update</button>
                </form>
            ) : (
                <div>
                    <h2>{lawyer.name}'s Profile</h2>
                    <p><strong>Email:</strong> {lawyer.email}</p>
                    <p><strong>Role:</strong> {lawyer.role}</p>
                </div>
            )}
        </div>
    );
};

export default LawyerProfile;
