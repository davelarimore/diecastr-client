import React from 'react';
import { Link } from 'react-router-dom';
import PublicNav from '../publicNav';
import UserNav from '../userNav';
import images from '../../images'
import './header.scss';

export const Header = (props) => {
    return (
        <header className='defaultHeader' role='banner'>
            <div className='headerContainer'>
                <Link to="/">
                    <img className='headerLogo' src={images.logo} alt='Diecastr' />
                </Link>
                <nav className='headerNav'>
                    {props.loggedIn ? <UserNav logout={props.logout} /> : <PublicNav />}
                </nav>
            </div>
        </header>
    );
}

export default Header;