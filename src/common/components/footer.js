import React from 'react';
import images from '../images'
import './footer.scss';

export const Footer = () => {
    return (
        <footer role="contentinfo">
            <div className='footerContainer'>
                <a href="/">
                    <div className='footerLogo'>
                        <img src={images.smallLogo} alt='Diecastr'/>
                    </div>
                </a>
                <div>
                    <p className='copyright'>&#9400;2018 Dave Larimore</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;