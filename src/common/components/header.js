import React from 'react';
import Radium from 'radium';
import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    header: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '10',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.accentColor,
        padding: '15px',
    },
    logo: {
        width: '100px',
        height: '50px',
        backgroundColor: colors.brandColor,
    },
    nav: {
        padding: '1% 0',
        backgroundColor: colors.accentColor,
    },

    ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },

    li: {
        display: 'inline-block',
        margin: '0 10px',
    }
}

function Header() {
    return (
        <header style={styles.header}>
            <a href="./"><div style={styles.logo}></div></a>
            <nav style={styles.nav}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <a href="./collection">My Collection</a>
                    </li>
                    <li style={styles.li}>
                        <a href="./community">Community</a>
                    </li>
                    <li style={styles.li}>
                        <a href="./account">My Account</a>
                    </li>
                    <li style={styles.li}>
                        <a href="./">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Radium(Header);