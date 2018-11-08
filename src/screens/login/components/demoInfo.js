import React from 'react';
import Radium from 'radium';

const styles = {
    section: {
        color: '#999',
        marginBottom: 30,
    },
    h2: {
        fontSize: 18,
        display: 'inline-block',
        textTransform: 'uppercase',
        marginBottom: 0,
    }
}

export const DemoInfo = (props) => {
    return (
        <section style={styles.section}>
            <h2 style={styles.h2}>Demo Account:</h2>
            <p>email: demo@diecastr.io</p>
            <p>password: 12345678</p>
        </section>
    );
}

export default Radium(DemoInfo);

