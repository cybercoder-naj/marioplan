import React, {Component} from 'react';
import {createProject} from "../../store/actions/projectActions";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.createProject(this.state);
    };

    render() {
        const {auth} = this.props;

        if (!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <br/>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createProject: project => dispatch(createProject(project))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
