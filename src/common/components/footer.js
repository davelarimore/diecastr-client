import React from 'react';
import Radium from 'radium';
import colors from '../colors';
// import mediaQueries from '../mediaQueries';
import images from '../images'

const styles = {
    footer: {
        backgroundColor: colors.brandColor,
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 80,
        width: "100%",
        overflow: 'hidden',
    },
    logo: {
        maxWidth: '100px',
        opacity: 0.5,
        marginTop: 5,
        // height: '50px',
    },
    img: {
        width: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 960,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '25px 0',
        '@media screen and (max-width: 1000px)': {
            padding: '25px 20px',
        },
    },
    copyright: {
        color: colors.lightText,
        opacity: 0.5,
        fontSize: 12,
        lineHeight: 0,
    }
}

export const Footer = () => {
    return (
        <footer style={styles.footer} role="contentinfo">
            <div style={styles.container}>
                <a href="/">
                    <div style={styles.logo}>
                        <img style={styles.img} src={images.smallLogo} alt='Diecastr'/>
                    </div>
                </a>
                <div>
                    <p style={styles.copyright}>&#9400;2018 Dave Larimore</p>
                </div>
            </div>
        </footer>
    );
}

export default Radium(Footer);