import React, { useState, useEffect } from 'react';
import { fetchExperiences } from '../api/services';

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
        <div>
            <h2>Experience</h2>
            {experiences.map(experience => (
                <div key={experience.id} style={{ marginBottom: '20px' }}>
                    <h3>{experience.company_name}</h3>
                    <p><strong>Role:</strong> {experience.role}</p>
                    <p><strong>Start Date:</strong> {experience.start_date}</p>
                    <p><strong>End Date:</strong> {experience.end_date || "Present"}</p>
                    <p><strong>Description:</strong> {experience.job_description}</p>
                </div>
            ))}
        </div>
    );
};

export default ExperiencesComponent;