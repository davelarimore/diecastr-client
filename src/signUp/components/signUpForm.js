import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';


const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -7.5
    },
    field: {
        display: 'table',
        width: '100%',
        textAlign: 'left',
    },
    label: {
        display: 'table-cell',
        fontSize: 12,
        width: 120
    },
    input: {
        display: 'table-cell',
        width: '100%',
        fontSize: 12,
    },
    submit: {
        display: 'table',
        width: '100%',
        textAlign: 'center',
        marginTop: 15,
    }
}

export const SignUpForm = () => {
    return (
        <section>
            <h1>Sign Up</h1>
            <form id="login" style={styles.form} className="signUpForm">
                <div style={styles.field} className="field">
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input style={styles.input} type="email" name="email" placeholder="Your email address" required />
                </div>
                <div style={styles.field} className="field">
                    <label htmlFor="userName" style={styles.label}>User Name</label>
                    <input style={styles.input} type="text" name="userName" placeholder="Desired user name" required />
                </div>
                <div style={styles.field} className="field">
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input style={styles.input} type="password" name="password" placeholder="Your password" required />
                </div>
                <div style={styles.field} className="field">
                    <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
                    <input style={styles.input} type="password" name="confirmPassword" placeholder="Confirm password" required />
                </div>
                <div style={styles.submit} className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Radium(SignUpForm);