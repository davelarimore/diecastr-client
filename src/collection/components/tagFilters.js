import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    li: {
        position: 'relative',
    },
    filterLabel: {
        position: 'relative',
        fontWeight: '700',
        marginTop: 15,
    },
    none: {
        position: 'relative',
        fontStyle: 'italic',
    }
}

export const TagFilters = (props) => {
    let links = [];
    if (props.tags.length > 0) {
    links = props.tags.map((link, index) =>
        <li style={styles.li} key={index}>
            <a href="#">{link}</a>
        </li>
    )
    } else {
        links = 
        <li style={styles.none}>
            No Tags
        </li>
    }
    return (
        <React.Fragment>
            <li style={styles.filterLabel}>Tags:</li>
            {links}
        </React.Fragment>
    );
}

export default Radium(TagFilters);