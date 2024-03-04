import React from 'react';
import { useQuery } from 'react-query';
import { fetchSkills } from '../api/services';

const fetchSkillsData = async () => {
    const response = await fetchSkills();
    // Sort the skills by name alphabetically after fetching
    return response.data.sort((a, b) => a.name.localeCompare(b.name));
};

const SkillsComponent = () => {
    const { data: skills, isLoading, error } = useQuery('skills', fetchSkillsData);

    if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;
    if (error) return <div style={{ color: 'white' }}>Error: {error.message}</div>;

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
                        {skill.description &&
                            <p className="skill-description"><strong>Description:</strong> {skill.description}</p>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;
