import React from 'react';
import { Link } from 'react-router-dom';
import './publicNav.scss';

export class PublicNav extends React.Component {
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
            <li className='publicNav'>
                <p onClick={this.showMenu}>Menu</p>
                {
                    this.state.showMenu
                        ? (
                            <ul className='navDropDownUl'
                                // className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <li className='navDropDownLi'>
                                    <Link to='/login'><p>Log In</p></Link>
                                </li>
                                <li className='navDropDownLi'>
                                    <Link to='/sign-up'><p>Sign Up</p></Link>
                                </li>
                                <li className='navDropDownLi'>
                                    <Link to='/community'><p>Community</p></Link>
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

export default PublicNav;