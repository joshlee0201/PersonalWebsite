import React from 'react';
import { useQuery } from 'react-query';
import { fetchSkills } from '../api/services'; // Ensure fetchSkillsData is defined and correctly fetching the data

const fetchSkillsData = async () => {
    const response = await fetchSkills();
    // Sort the skills by name alphabetically after fetching
    return response.data.sort((a, b) => a.name.localeCompare(b.name));
};

const SkillsComponent = () => {
    const { data: skills, isLoading, error } = useQuery('skills', fetchSkillsData, {
        staleTime: 5 * 60 * 1000, 
        cacheTime: 15 * 60 * 1000,
        refetchOnMount: false, 
        refetchOnWindowFocus: false 
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="section skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                {skills?.map(skill => (
                    <div key={skill.id} className="skill-entry">
                        <p className="skill-name">{skill.name}</p>
                        {skill.proficiency_level &&
                            <p className="skill-proficiency"><strong>Proficiency Level:</strong> {skill.proficiency_level}</p>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;
