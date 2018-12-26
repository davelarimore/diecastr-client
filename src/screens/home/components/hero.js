import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../common/images'
import './hero.scss';

const heroStyle = {
    backgroundImage: images.heroImage
}

export const Hero = () => {
    return (
        <header className='hero' style={heroStyle} role='banner'>
            <div className='heroContainer'>
                <div className='heroColumn'>
                    <Link to="/">
                        <img src={images.logo} alt='Diecastr'/>
                    </Link>
                    <h2>Manage your model collection and share it with others.</h2>
                    <a className='heroButton' key='login' href="./login">Login</a>
                    <a className='heroButton' key='sign-up' href="./sign-up">Sign Up</a>
                </div>
            </div>
        </header>
    );
}

export default Hero;