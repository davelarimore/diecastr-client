import React from 'react';
import Radium from 'radium';
// import colors from '../../../common/colors';
// import mediaQueries from '../../../common/mediaQueries';

const styles = {
    li: {
        fontSize: 14,
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        margin: '0 10px',
    },
    dropDownUl: {
        position: 'absolute',
        right: 0,
        listStyle: 'none',
        textAlign: 'left',
        fontSize: 16,
        backgroundColor: 'white',
        padding: 15,
        margin: 0,
        zIndex: 5,
        width: 150,
    },
    dropDownLi: {
        whiteSpace: 'nowrap',
        margin: '0 10px',
        cursor: 'pointer',
    },
    active: {
        fontWeight: '700',
    }
}

export class FilterMenu extends React.Component {
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
                    name: 'For sale',
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
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.filterToggle = this.filterToggle.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
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
            <li style={styles.li}>
                <p onClick={this.showMenu}>FILTER</p>
                {
                    this.state.showMenu
                        ? (
                            <ul style={styles.dropDownUl}
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                {this.state.filters.map((filter, index) =>
                                    <li style={filter.active ? [styles.dropDownLi, styles.active] : styles.dropDownLi} key={index}
                                        onClick={() => { this.filterToggle(index); this.props.setFilter(filter.name) }}>
                                        <p>{filter.displayName}</p>
                                    </li>
                                )}
                            </ul>
                        )
                        : (
                            null
                        )
                }
            </li>
        );
    }
}

export default Radium(FilterMenu);