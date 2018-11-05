import React from 'react';
import Radium from 'radium';

const styles = {
    loading: {
        fontFamily: "'Lato', sans-serif",
        fontSize: 18,
        fontWeight: 700,
        margin: '20px 0',
    },
   
}

export const Loading = (props) => {
    return (
        <p style={styles.loading}>{props.message}</p>
    );
}

export default Radium(Loading);