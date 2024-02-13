import React from 'react';
import ProfilesComponent from './components/ProfilesComponent';
import ProjectsComponent from './components/ProjectsComponent';
import EducationComponent from './components/EducationComponent';
import ExperiencesComponent from './components/ExperiencesComponent';
import SkillsComponent from './components/SkillsComponent';
// Import other components
import './App.css'; // Assuming you have some basic styles

function App() {
    return (
        <div className="App">
            <h1>Josh Lee's Personal Website</h1>
            <ProfilesComponent />
            <ExperiencesComponent />
            <EducationComponent />
            <ProjectsComponent />
            <SkillsComponent />
        </div>
    );
}

export default App;
