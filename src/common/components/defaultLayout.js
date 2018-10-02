import React from 'react';
import Radium from 'radium';
import { Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'auto',
        minHeight: '100%',
        height: '100%',
        // position: 'relative',
    },
    main: {
        paddingTop: 100,
        paddingBottom: 50,
        maxWidth: 960,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div style={styles.container}>
                <Header />
                <main style={styles.main}>
                    <Component {...matchProps} />
                </main>
                <Footer />
            </div>
        )} />
    )
};

export default Radium(DefaultLayout);