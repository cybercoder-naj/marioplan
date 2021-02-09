import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Cybercoder</p>
                <p className="grey-text">7th February, 2021</p>
            </div>
        </div>
    );
};

export default ProjectSummary;
