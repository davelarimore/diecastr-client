import React from 'react';
import Radium from 'radium';
// import FilterMenu from './filterMenu';
import colors from '../../../common/colors';

const styles = {
    nav: {
        display: 'inline-block',
        float: 'right',
        paddingTop: 3,
    },
    h1: {
        display: 'inline-block',
        color: colors.darkText,
        textTransform: 'uppercase',
        marginBottom: 0,
    }
}

export const CollectionHeader = (props) => {
    return (
        <section>
            <h1 style={styles.h1}>{props.collectionName}</h1>
            {/* <nav style={styles.nav}> */}
                    {/* <FilterMenu setFilter={props.setFilter}/> */}
            {/* </nav> */}
        </section>
    );
}

export default Radium(CollectionHeader);