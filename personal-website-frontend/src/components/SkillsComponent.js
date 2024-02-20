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
        <div className="section">
            <h2 style={{ marginBottom: '40px' }}>Technical Skills</h2>
            {skills.map(skill => (
                <div key={skill.id} style={{ marginBottom: '20px' }}>
                    <p>{skill.name}</p>
                    {skill.proficiency_level &&
                        <p><strong>Proficiency Level:</strong> {skill.proficiency_level}</p>
                    }
                    {skill.description &&
                        <p><strong>Description:</strong> {skill.description}</p>
                    }
                </div>
            ))}
        </div>
    );
};

export default SkillsComponent;
