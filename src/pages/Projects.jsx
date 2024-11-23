import React from 'react';
import projects from '../components/data/projectsData'; // Import the data file
import './Projects.css'; // Import your styles

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
