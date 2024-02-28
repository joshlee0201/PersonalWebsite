import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../api/services';

const SkillsComponent = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills()
            .then(response => {
                // Sort the skills by name alphabetically
                const sortedSkills = response.data.sort((a, b) => a.name.localeCompare(b.name));
                setSkills(sortedSkills);
            })
            .catch(error => console.error('Fetching skills failed', error));
    }, []);

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
