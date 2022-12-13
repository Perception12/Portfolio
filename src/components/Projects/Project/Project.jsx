import React from 'react';
import '../../../styles/Project.css';
import projectIcon from '../../../assets/project.svg';

const Project = ({project}) => {
  return (
    <div className="project">
        <img src={projectIcon} alt="project icon" />
        <div className="p-title">
            {project.title}
        </div>
        <div className="p-tools">
            {project.tools.map((tool, i) => (
                <span className="tool" key={i}>{tool}</span>
            ))}
        </div>
        <div className="buttons">
            <a href={project.github} target="_blank" rel='noreferrer' >Code</a>
            <a href={project.live} target="_blank" rel='noreferrer' >Live</a>
        </div>
    </div>
  )
}

export default Project
