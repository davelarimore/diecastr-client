import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './components/signUpForm'

const SignUpContainer = ({ users }) => (
    <React.Fragment>
        <SignUpForm />
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    users: state.signUp.users
})

export default connect(mapStateToProps)(SignUpContainer)