import React from 'react';
import { Link } from 'react-router-dom';
import './publicNav.scss';

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
            <div className='userNav'>
                <p onClick={this.showMenu}>Menu</p>
                {
                    this.state.showMenu
                        ? (
                            <ul className='navDropDownUl'
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <li className='navDropDownLi'>
                                    <Link to='/collection'><p>My Collection</p></Link>
                                </li>
                                <li className='navDropDownLi'>
                                    <Link to='/account'><p>My Account</p></Link>
                                </li>
                                <li className='navDropDownLi'>
                                    <Link to='/community'><p>Community</p></Link>
                                </li>
                                <li className='navDropDownLi'
                                    onClick={() => this.props.logout()} >
                                    <Link to='/'>Logout</Link>
                                </li>
                            </ul>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default UserNav;