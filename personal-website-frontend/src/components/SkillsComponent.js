import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../api/services';

const SkillsComponent = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills()
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => console.error('Fetching skills failed', error));
    }, []);

    return (
        <div>
            <h2>Skills</h2>
            {skills.map(skill => (
                <div key={skill.id} style={{ marginBottom: '20px' }}>
                    <h3>{skill.name}</h3>
                    <p><strong>Proficiency Level:</strong> {skill.proficiency_level}</p>
                    <p><strong>Description:</strong> {skill.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillsComponent;
