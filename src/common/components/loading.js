import React from 'react';
import Radium from 'radium';
import Loadable from 'react-loading-overlay';
import colors from '../colors';

const styles = {
    loadingContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        height: 145,
        border: 'none',
        borderRadius: 8,
        backgroundColor: colors.brandColor,
        zIndex: 100,
        padding: 30,
    },
}

export const Loading = (props) => {
    return (
        <div style={styles.loadingContainer}>
            <Loadable
                active={true}
                spinner={true}
                animate={true}
                color={'white'}
                text={props.message}
            >
            </Loadable >
        </div>
    )
}

export default Radium(Loading);