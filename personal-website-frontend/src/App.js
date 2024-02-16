import React from 'react';
import ProfilesComponent from './components/ProfilesComponent';
import ProjectsComponent from './components/ProjectsComponent';
import EducationComponent from './components/EducationComponent';
import ExperiencesComponent from './components/ExperiencesComponent';
import SkillsComponent from './components/SkillsComponent';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <h1 className="main-heading">Josh Lee's Personal Website</h1>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Navbar />
            </nav>

            <div id="profile">
                <ProfilesComponent />
            </div>
            <div id="experience">
                <ExperiencesComponent />
            </div>
            <div id="education">
                <EducationComponent />
            </div>
            <div id="projects">
                <ProjectsComponent />
            </div>
            <div id="skills">
                <SkillsComponent />
            </div>
        </div>
    );
}

export default App;
