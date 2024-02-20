import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faBriefcase, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This enables smooth scrolling
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="#home" onClick={scrollToTop} className="navbar-brand">
                    <FontAwesomeIcon icon={faHome} /> Home
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">
                                <FontAwesomeIcon icon={faBriefcase} /> Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">
                                <FontAwesomeIcon icon={faGraduationCap} /> Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                <FontAwesomeIcon icon={faLightbulb} /> Skills
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
