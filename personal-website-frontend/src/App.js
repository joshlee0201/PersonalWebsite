import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProfilesComponent from './components/ProfilesComponent';
import ProjectsComponent from './components/ProjectsComponent';
import EducationComponent from './components/EducationComponent';
import ExperiencesComponent from './components/ExperiencesComponent';
import SkillsComponent from './components/SkillsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

// Instantiate query client
const queryClient = new QueryClient();

function App() {
    return (
        // Provide the query client to app
        <QueryClientProvider client={queryClient}>
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
                <footer style={{ textAlign: 'center', padding: '20px 0', marginTop: '40px', backgroundColor: '#242f40', color: 'white' }}>
                    Created with Django and React by Josh Lee
                </footer>

            </div>
        </QueryClientProvider>
        
    );
}

export default App;
