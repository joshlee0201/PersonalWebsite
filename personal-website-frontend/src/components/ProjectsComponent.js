import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/services';

const ProjectsComponent = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects()
            .then(response => {
                setProjects(response.data);
                setLoading(false); // Data fetched, loading complete
            })
            .catch(error => {
                console.error('Fetching projects failed', error);
                setError('Failed to fetch projects.');
                setLoading(false); // Loading complete even if there's an error
            });
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div style={{ color: 'white' }}>Error: {error}</div>; // Show error message

    return (
        <div className="section">
            <h2>Projects</h2>
            {projects.map(project => (
                <div key={project.id} className="multiple-entry">
                    <h3>{project.title}</h3>
                    <div>
                        <strong>Description:</strong>
                        <ul>
                            {project.description.split('\n').map((item, index) => (
                                item.trim() !== "" ? <li key={index}>{item}</li> : null
                            ))}
                        </ul>
                    </div>
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
