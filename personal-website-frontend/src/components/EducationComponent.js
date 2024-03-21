import React from 'react';
import { useQuery } from 'react-query';
import { fetchEducation } from '../api/services';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)}/${new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)}/${new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date)}`;
};

const fetchEducations = async () => {
    const response = await fetchEducation();
    return response.data;
};

const EducationComponent = () => {
    const { data: educations, isLoading, error } = useQuery('educations', fetchEducations, {
        staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
        cacheTime: 15 * 60 * 1000, // Data cached for 15 minutes
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
