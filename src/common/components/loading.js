import React from 'react';
import Radium from 'radium';
import Loadable from 'react-loading-overlay';
import colors from '../colors';

const styles = {
    loadingContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colors.brandColor,
        zIndex: 100,
        padding: '30%',
    },

}

export const Loading = (props) => {
    return (
        <div style={styles.loadingContainer}>
            < Loadable
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