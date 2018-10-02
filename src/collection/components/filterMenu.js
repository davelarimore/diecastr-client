import React from 'react';
import Radium from 'radium';
import StatusFilters from './statusFilters';
import TagFilters from './tagFilters';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    li: {
        display: 'inline-block',
        position: 'relative',
        margin: '0 10px',
    },
    dropDownUl: {
        position: 'absolute',
        left: '0',
        listStyle: 'none',
        textAlign: 'left',
        fontSize: 16,
        backgroundColor: 'white',
        padding: 15,
        margin: '0',
        zIndex: '5',
        width: 200,
    },
    dropDownLi: {
        margin: '0 10px',
    }
}

export class FilterMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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
    render() {
        return (
            <li style={styles.li}>
                <a href="#" onClick={this.showMenu}>Filter</a>
                {
                    this.state.showMenu
                        ? (
                            <ul style={styles.dropDownUl}
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <StatusFilters />
                                <TagFilters tags={this.props.tags}/>
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