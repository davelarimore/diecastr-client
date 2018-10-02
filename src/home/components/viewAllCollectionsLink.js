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
}

export const ViewAllCollectionsLink = () => {
    return (
        <a style={styles.button} href="./community">View All</a>
    );
}

export default Radium(ViewAllCollectionsLink);