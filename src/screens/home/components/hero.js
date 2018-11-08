import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import colors from '../../../common/colors';
import images from '../../../common/images'

const styles = {
    header: {
        flex: '1 1',
        backgroundImage: images.heroImage,
        backgroundSize: 'cover',
        backgroundColor: colors.accentColor,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '80px 15px',
        '@media screen and (max-width: 767px)': {
            padding: '30px 15px',
        },
        '@media screen and (max-width: 420px)': {
            padding: '30px 15px',
        }
    },
    container: {
        maxWidth: 960,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    column: {
        maxWidth: 400,
        textAlign: 'center',
        padding: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,
        '@media screen and (max-width: 767px)': {
            width: '80%',
            padding: 30,
        },
        '@media screen and (max-width: 420px)': {
            width: '80%',
            padding: 30,
        }
    },
    logo: {
        maxWidth: '300px',
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    button: {
        display: 'inline-block',
        fontSize: 16,
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: colors.darkText,
        padding: '7px 25px',
        margin: '0 15px',
        borderRadius: 8,
        backgroundColor: '#FFF',
        ':hover': {
            backgroundColor: '#DDD',
        },
        '@media screen and (max-width: 767px)': {
            fontSize: 12,
            padding: '4px 15px',
        },
        '@media screen and (max-width: 420px)': {
            fontSize: 12,
            padding: '4px 15px',
            margin: '0 3%',
        }
    },
    h2: {
        fontSize: 24,
        lineHeight: '1.4em',
        fontWeight: 400,
        color: colors.lightText,
        margin: '30px 0',
        '@media screen and (max-width: 767px)': {
            fontSize: 18,
            margin: '20px 0',
        },
        '@media screen and (max-width: 420px)': {
            fontSize: 18,
            margin: '10px 0 30px 0',
        }
    }
}

export const Hero = () => {
    return (
        <header style={styles.header} role='banner'>
            <div style={styles.container}>
                <div style={styles.column}>
                    <Link to="/">
                        <img style={styles.logo} src={images.logo} alt='Diecastr'/>
                    </Link>
                    <h2 style={styles.h2}>Manage your model collection and share it with others.</h2>
                    <a style={styles.button} key='login' href="./login">Login</a>
                    <a style={styles.button} key='sign-up' href="./sign-up">Sign Up</a>
                </div>
            </div>
        </header>
    );
}

export default Radium(Hero);