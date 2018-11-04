import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../modules/auth';
import LoginForm from './components/loginForm'

const LoginContainer = (props) => {

// If we are logged in redirect straight to the user's collection
    if (props.loggedIn) {
    return <Redirect to="/collection" />;
}

return (
    <section>
        <h1>Log in to Diecastr</h1>
        <LoginForm login={props.login}/>
        <Link to="/sign-up">Sign Up</Link>
    </section>
);
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.currentUserId !== null
})

const mapDispatchToProps = dispatch => ({
    login: values => dispatch(login(values.email, values.password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)