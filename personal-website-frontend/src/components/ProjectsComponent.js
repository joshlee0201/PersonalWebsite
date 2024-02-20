import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/services';

const ProjectsComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects()
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error('Fetching projects failed', error));
    }, []);

    return (
        <div className="section">
            <h2>Projects</h2>
            {projects.map(project => (
                <div key={project.id} className="multiple-entry">
                    <h3>{project.title}</h3>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Technologies Used:</strong> {project.technologies_used}</p>
                    {project.image && (
                        <img src={project.image} alt={`${project.title} screenshot`} style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
                    )}
                    {project.project_link && (
                        <p><strong>Project Link:</strong> <a href={project.project_link} target="_blank" rel="noopener noreferrer">{project.project_link}</a></p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;
