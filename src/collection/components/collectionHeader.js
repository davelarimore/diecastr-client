import React from 'react';
import Radium from 'radium';
import FilterMenu from './filterMenu';
import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    nav: {
        padding: '10px 0',
        backgroundColor: colors.accentColor,
    },
    ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    li: {
        display: 'inline-block',
        position: 'relative',
        margin: '0 10px',
    },
}

function CollectionHeader(props) {
    return (
        <section>
            <h1>My Collection</h1>
            <nav style={styles.nav}>
                <ul style={styles.ul}>
                    <FilterMenu tags={props.tags}/>
                </ul>
            </nav>
        </section>
    );
}

export default Radium(CollectionHeader);