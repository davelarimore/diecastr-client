import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import PublicNav from '../publicNav';
import UserNav from '../userNav';
import colors from '../../colors';
import mediaQueries from '../../mediaQueries';
import images from '../../images'

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        backgroundColor: colors.brandColor,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 960,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 0 15px 0',
        '@media screen and (max-width: 1000px)': {
            padding: '20px 20px 15px 20px',
        },
    },
    logo: {
        maxWidth: 150,
        [mediaQueries.breakpointLarge]: {
            width: 100,
            height: 75,
        },
        [mediaQueries.breakpointSmall]: {
            width: 100,
            height: 50,
        }
    },
    nav: {
        color: colors.lightText,
        padding: '1% 0',
    },
}

export const Header = (props) => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link to="/">
                    <img style={styles.logo} src={images.logo} alt='Diecastr' />
                </Link>
                <nav style={styles.nav}>
                    {props.loggedIn ? <UserNav logout={props.logout} /> : <PublicNav />}
                </nav>
            </div>
        </header>
    );
}

export default Radium(Header);