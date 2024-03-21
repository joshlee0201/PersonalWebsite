import React from 'react';
import { useQuery } from 'react-query';
import { fetchProjects } from '../api/services';

const fetchProjectsData = async () => {
    const response = await fetchProjects();
    // Ensure projects is an array
    return Array.isArray(response.data) ? response.data : [];
};

const ProjectsComponent = () => {
    const { data: projects, isLoading, error } = useQuery('projects', fetchProjectsData, {
        staleTime: 5 * 60 * 1000,
        cacheTime: 15 * 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="section">
            <h2>Projects</h2>
            {projects.map(project => (
                <div key={project.id} className="multiple-entry">
                    <h3>{project.title}</h3>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Technologies Used:</strong> {project.technologies_used}</p>
                    {project.image && (
                        <img src={project.image} alt={`${project.title} screenshot`} style={{ maxWidth: '600px' }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;
