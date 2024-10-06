import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import any required styles

const LawyersList = () => {
    const [lawyers, setLawyers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the list of registered lawyers
    useEffect(() => {
        fetch('/api/lawyers') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                setLawyers(data);
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to fetch lawyers");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="lawyers-list">
            <h2>Registered Lawyers</h2>
            <table className="lawyers-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lawyers.map(lawyer => (
                        <tr key={lawyer.id}>
                            <td>{lawyer.name}</td>
                            <td>{lawyer.email}</td>
                            <td>
                                <Link to={`/lawyer/${lawyer.id}/view`} className="view-button">View</Link>
                                <Link to={`/lawyer/${lawyer.id}/edit`} className="edit-button">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LawyersList;

