import React from 'react';

const ProjectDetails = props => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores corporis
                        culpa enim error et fuga id, in inventore modi necessitatibus nobis non possimus, quasi qui
                        saepe sunt, voluptate!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Cybercoder</div>
                    <div>7th February, 2021</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
