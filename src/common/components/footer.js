import React from 'react';
import Radium from 'radium';
import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    footer: {
        padding: '1% 0',
        backgroundColor: colors.accentColor,
        position: 'fixed',
        bottom: '0',
        width: '100%',
    }
}

export const Footer = () => {
    return (
        <footer style={styles.footer} role="contentinfo">Footer</footer>
    );
}

export default Radium(Footer);