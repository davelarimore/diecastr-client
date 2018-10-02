import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/loginForm'

const LoginContainer = ({ users }) => (
    <LoginForm />
);

const mapStateToProps = (state) => ({
    users: state.login.users
})

export default connect(mapStateToProps)(LoginContainer)