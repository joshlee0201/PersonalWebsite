import React, { useState, useEffect } from 'react';
import { fetchExperiences } from '../api/services';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${month}/${day}/${year}`;
};

const ExperiencesComponent = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchExperiences()
            .then(response => {
                setExperiences(response.data);
                setLoading(false); // Indicate loading is complete
            })
            .catch(error => {
                console.error('Fetching experiences failed', error);
                setError('Failed to fetch experiences.');
                setLoading(false); // Indicate loading is complete even if there is an error
            });
    }, []);

    if (loading) return <div>Loading...</div>; // Display while loading
    if (error) return <div style={{ color: 'white' }}>Error: {error}</div>; // Display on error

    return (
        <div className="section">
            <h2>Experience</h2>
            {experiences.map(experience => (
                <div key={experience.id} className="multiple-entry">
                    <h3>{experience.company_name}</h3>
                    <p><strong>Role:</strong> {experience.role}</p>
                    <p><strong>Start Date:</strong> {formatDate(experience.start_date)}</p>
                    <p><strong>End Date:</strong> {experience.end_date ? formatDate(experience.end_date) : "Present"}</p>
                    <div>
                        <strong>Description:</strong>
                        <ul>
                            {experience.job_description.split('\n').map((item, index) => (
                                item.trim() !== "" ? <li key={index}>{item}</li> : null
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperiencesComponent;
