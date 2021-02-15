import React from 'react';
import {NavLink} from "react-router-dom";
import {signOut} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

function SignedInLinks(props) {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.user && props.user.initials}</NavLink></li>
        </ul>
    );
}

function mapStateToProps(state) {
    console.log(state);
    const user = state.firebase.profile;
    return {user};
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut())
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(SignedInLinks);
