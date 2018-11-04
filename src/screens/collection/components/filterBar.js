import React from 'react';
import Radium from 'radium';
// import colors from '../../../common/colors';
// import mediaQueries from '../../../common/mediaQueries';

const styles = {
    li: {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        margin: '0 10px',
    },
    dropDownUl: {
        position: 'absolute',
        left: 0,
        listStyle: 'none',
        textAlign: 'left',
        fontSize: 16,
        backgroundColor: 'white',
        padding: 15,
        margin: 0,
        zIndex: 5,
        width: 150,
    },
    filter: {
        display: 'inline',
        // whiteSpace: 'nowrap',
        margin: '0 10px',
        cursor: 'pointer',
    },
    active: {
        fontWeight: '700',
    }
}

export class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            filters: [
                {
                    name: 'Show all',
                    displayName: 'Show all',
                    active: true,
                },
                {
                    name: 'For Sale',
                    displayName: 'For sale',
                    active: false,
                },
                {
                    name: 'Not for sale',
                    displayName: 'Not for sale',
                    active: false,
                },
                {
                    name: 'Sold',
                    displayName: 'Sold',
                    active: false,
                },
                {
                    name: 'Wanted',
                    displayName: 'Wanted',
                    active: false,
                },
            ]
        };
        this.filterToggle = this.filterToggle.bind(this);
    }

    // visually toggle selected filter
    filterToggle(filterIndex) {
        let filters = this.state.filters;
        filters[filterIndex].active = true;
        filters.map((filter, index) => {
            if (index !== filterIndex) filter.active = false;
            return null
        });
        this.setState(filters);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.filters.map((filter, index) =>
                    <p style={filter.active ? [styles.filter, styles.active] : styles.filter} key={index}
                        onClick={() => { this.filterToggle(index); this.props.setFilter(filter.name) }}>
                        {filter.displayName}
                    </p>
                )}
            </React.Fragment>
        );
    }
}

export default Radium(FilterBar);