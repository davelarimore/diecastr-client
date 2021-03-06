import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/headerContainer';
import Footer from './footer';
import AddModelButton from './addModelButton';
import './defaultLayout.scss';

export const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className='defaultContainer'>
                <Header />
                <main className='defaultMain' role='main'>
                    <Component {...matchProps} />
                </main>
                {rest.addModelButton ? <AddModelButton /> : null}
                <Footer />
            </div>
        )} />
    )
};

export default DefaultLayout;