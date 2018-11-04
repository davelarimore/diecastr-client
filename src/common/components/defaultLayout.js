import React from 'react';
import Radium from 'radium';
import { Route } from 'react-router-dom';
import Header from './header/headerContainer';
import Footer from './footer';
import AddModelButton from './addModelButton';

import './defaultLayout.css'

export const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className='defaultContainer'>
                <Header />
                <main className='defaultMain'>
                    <Component {...matchProps} />
                </main>
                {rest.addModelButton ? <AddModelButton /> : null}
                <Footer />
            </div>
        )} />
    )
};

export default Radium(DefaultLayout);