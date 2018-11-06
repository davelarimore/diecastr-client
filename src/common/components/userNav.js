import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
// import colors from '../colors';
// import mediaQueries from '../mediaQueries';

const styles = {
    li: {
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
        margin: '10px 0 0 0',
        zIndex: 5,
        width: 150,
    },
    dropDownLi: {
        whiteSpace: 'nowrap',
        margin: '10px 10px',
        cursor: 'pointer',
    },
    active: {
        fontWeight: '700',
    }
}

export class UserNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        return (
            <li className='userNav' style={styles.li}>
                <p onClick={this.showMenu}>Menu</p>
                {
                    this.state.showMenu
                        ? (
                            <ul style={styles.dropDownUl}
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <li style={styles.dropDownLi}>
                                    <Link to='/collection'><p>My Collection</p></Link>
                                </li>
                                <li style={styles.dropDownLi}>
                                    <Link to='/account'><p>My Account</p></Link>
                                </li>
                                <li style={styles.dropDownLi}>
                                    <Link to='/community'><p>Community</p></Link>
                                </li>
                                <li style={styles.dropDownLi}
                                    onClick={() => this.props.logout()} >
                                    <Link to='/'>Logout</Link>
                                </li>
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

export default Radium(UserNav);