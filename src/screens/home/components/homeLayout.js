import React from 'react';
import { Route } from 'react-router-dom';
import Hero from './hero';
import Footer from '../../../common/components/footer';
import './homeLayout.scss';

export const HomeLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Hero />
                <main className='homeMain' role='main'>
                    <Component {...matchProps} />
                </main>
                <Footer />
            </div>
        )} />
    )
};

export default HomeLayout;