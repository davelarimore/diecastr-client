import React from 'react';
import Radium from 'radium';

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

export class DropNav extends React.Component {
    constructor(props) {
        super(props);
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
                                {this.props.links.map((link, index) =>
                                    <li style={styles.dropDownLi} key={index}
                                        onClick={link.onClick || null}>
                                        <a href={link.href}><p>{link.text}</p></a>
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

export default Radium(DropNav);