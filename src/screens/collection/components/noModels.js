import React from 'react';
import Radium from 'radium';

const styles = {
    noModels: {
        margin: '25px 0 0 0',
    },
}

export const NoModels = () => {

    return (
        <div style={styles.noModels}>
            <p>No models in collection.</p>
            <p>Click the button below to add one.</p>
        </div>
    );
}

export default Radium(NoModels);