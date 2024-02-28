import React, { useState, useEffect } from 'react';
import { fetchExperiences } from '../api/services';

// Utility function to format dates
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${month}/${day}/${year}`;
};

const ExperiencesComponent = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchExperiences()
            .then(response => {
                setExperiences(response.data);
            })
            .catch(error => console.error('Fetching experiences failed', error));
    }, []);

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
