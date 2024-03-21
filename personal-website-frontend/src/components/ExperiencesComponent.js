import React from 'react';
import { useQuery } from 'react-query';
import { fetchExperiences } from '../api/services';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)}/${new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)}/${new Intl.DateTimeFormat('en', { year: '2-digit' }).format(date)}`;
};

const fetchExperiencesData = async () => {
    const response = await fetchExperiences();
    return response.data;
};

const ExperiencesComponent = () => {
    const { data: experiences, isLoading, error } = useQuery('experiences', fetchExperiencesData, {
        staleTime: 5 * 60 * 1000,
        cacheTime: 15 * 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="section">
            <h2>Experience</h2>
            {experiences?.map(experience => (
                <div key={experience.id} className="multiple-entry">
                    <h3>{experience.company_name}</h3>
                    <p><strong>Role:</strong> {experience.role}</p>
                    <p><strong>Start Date:</strong> {formatDate(experience.start_date)}</p>
                    <p><strong>End Date:</strong> {experience.end_date ? formatDate(experience.end_date) : "Present"}</p>
                    <p><strong>Description:</strong> {experience.job_description}</p>
                </div>
            ))}
        </div>
    );
};

export default ExperiencesComponent;
