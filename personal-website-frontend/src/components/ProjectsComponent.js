import React from 'react';
import { useQuery } from 'react-query';
import { fetchProjects } from '../api/services';

const fetchProjectsData = async () => {
    const response = await fetchProjects();
    return response.data;
};

const ProjectsComponent = () => {
    const { data: projects, isLoading, error } = useQuery('projects', fetchProjectsData);

    if (isLoading) return <div style={{ color: 'white' }}>Loading...</div>;
    if (error) return <div style={{ color: 'white' }}>Error: {error.message}</div>;

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
