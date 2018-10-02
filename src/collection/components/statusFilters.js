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
    }
}

export const StatusFilters = () => {
        const statusFilters = ['For Sale', 'Not For Sale', 'Sold', 'Wanted'];

        const links = statusFilters.map((link, index) =>
            <li style={styles.li} key={index}>
                <a href="#">{link}</a>
            </li>
        )
        return (
            <React.Fragment>
                <li style={styles.filterLabel}>Status:</li>
                {links}     
            </React.Fragment>
        );
    }

export default Radium(StatusFilters);