import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    button: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: '5px 15px',
        margin: '0 15px',
        border: '1px solid black',
        ':hover': {
            backgroundColor: '#DDD',
        }
    },
    section: {
        marginBottom: 30,
    }
}
export const OnboardingSection = () => {
    return (
        <section style={styles.section}>
            <h3>Manage your model collection and share it with others.</h3>
            <a style={styles.button} key='login' href="./login">Login</a>
            <a style={styles.button} key='sign-up' href="./sign-up">Sign Up</a>
        </section>
    );
}

export default Radium(OnboardingSection);