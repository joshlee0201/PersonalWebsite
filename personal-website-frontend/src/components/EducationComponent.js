import React from 'react';
import { useQuery } from 'react-query';
import { fetchEducation } from '../api/services';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${month}/${day}/${year}`;
};

const fetchEducations = async () => {
    const response = await fetchEducation();
    return response.data;
};

const EducationComponent = () => {
    const { data: educations, isLoading, error } = useQuery('educations', fetchEducations);

    if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;
    if (error) return <div style={{ color: 'white' }}>Error: {error.message}</div>;

    return (
        <div className="section">
            <h2>Education</h2>
            {educations?.map(education => (
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
