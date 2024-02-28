import React, { useState, useEffect } from 'react';
import { fetchEducation } from '../api/services';

// Utility function to format dates
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${month}/${day}/${year}`;
};

const EducationComponent = () => {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        fetchEducation()
            .then(response => {
                setEducations(response.data);
            })
            .catch(error => console.error('Fetching education failed', error));
    }, []);

    return (
        <div className="section">
            <h2>Education</h2>
            {educations.map(education => (
                <div key={education.id} className="multiple-entry">
                    <h3>{education.institution_name}</h3>
                    <p><strong>Degree:</strong> {education.degree}</p>
                    <p><strong>Field of Study:</strong> {education.field_of_study}</p>
                    <p><strong>Start Date:</strong> {formatDate(education.start_date)}</p>
                    <p><strong>End Date:</strong> {education.end_date ? formatDate(education.end_date) : 'Present'}</p>
                    <p><strong>Description:</strong> {education.description}</p>
                </div>
            ))}
        </div>
    );
};

export default EducationComponent;
