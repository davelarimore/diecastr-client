import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -7.5,
    },
    field: {
        display: 'table',
        width: '100%',
        textAlign: 'left',
    },
    label: {
        display: 'table-cell',
        fontSize: 12,
        width: 120,
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
    },
    oneCol: {
        flex: '1 1 90%',
        margin: '0 15px 15px 0',
    }
}

function LoginForm() {
    return (
        <section>
            <h1>Login</h1>
            <form id="login" style={styles.form}>
                <div style={styles.oneCol}>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="email">Email</label>
                        <input style={styles.input} type="email" name="email" placeholder="Your email address" required />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="password">Password</label>
                        <input style={styles.input} type="password" name="password" placeholder="Your password" required />
                    </div>
                    <div style={styles.submit}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Radium(LoginForm);