import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    h1: {
        margin: '0 0 15px 0',
    }
}

export const ModelHeader = (props) => {
    return (
        <section>
            <h1 style={styles.h1}>{props.model.title}</h1>
        </section>
    );
}

export default Radium(ModelHeader);