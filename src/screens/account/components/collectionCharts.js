import React from 'react';
import Radium from 'radium';
// import colors from '../../../common/colors';
// import mediaQueries from '../../../common/mediaQueries';

const styles = {
    h2: {
        fontSize: 24,
        margin: '10px 0 5px 0',
    },
}

//props.models
export const CollectionCharts = (props) => {

    return (
        <section>
            <h2 style={styles.h2}>Collection Charts</h2>
        </section>
    );
}

export default Radium(CollectionCharts);