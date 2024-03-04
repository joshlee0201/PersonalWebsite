import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../api/services';

const SkillsComponent = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSkills()
            .then(response => {
                // Sort the skills by name alphabetically
                const sortedSkills = response.data.sort((a, b) => a.name.localeCompare(b.name));
                setSkills(sortedSkills);
                setLoading(false); // Indicate loading is complete
            })
            .catch(error => {
                console.error('Fetching skills failed', error);
                setError('Failed to fetch skills.');
                setLoading(false); // Indicate loading is complete even if there is an error
            });
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div style={{ color: 'white' }}>Error: {error}</div>; // Show error message

    return (
        <div className="section skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                {skills.map(skill => (
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
