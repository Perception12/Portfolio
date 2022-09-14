import React from 'react';
import '../../styles/Projects.css';
import projectData from '../../data/projectData';
import Project from './Project/Project';

const Projects = () => {
  return (
    <div className="projects">
        <div className="heading">
            <div>Milestones of Projects</div>
            <p>Here are a few projects i've worked on</p>
        </div>
        <div className="projects-content">
            {projectData.map((project, i) => (
                <Project project={project} key={i} />
            ))}
        </div>
    </div>
  )
}

export default Projects