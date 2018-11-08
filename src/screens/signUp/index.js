import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from '../../modules/api/users';
import { login } from '../../modules/auth';

import SignUpForm from './components/signUpForm';

export function SignUpContainer(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's collection
    if (props.loggedIn) {
        return <Redirect to="/collection" />;
    }
    return (
        <section>
            <h1>Sign Up for Diecastr</h1>
            <SignUpForm registerUser={props.registerUser} login={props.login}/>
            <Link to="/login" style={{ display: 'inline-block', marginBottom: 30 }}>Login</Link>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUserId !== null,
    currentUserId: state.auth.currentUserId
});

const mapDispatchToProps = dispatch => ({
    registerUser: values => dispatch(registerUser(values)),
    login: values => dispatch(login(values.email, values.password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)