import React from 'react';
import './demoInfo.scss';

export const DemoInfo = (props) => {
    return (
        <section className='demoSection'>
            <h2 className='demoText'>Demo Account:</h2>
            <p>email: demo@diecastr.io</p>
            <p>password: 12345678</p>
        </section>
    );
}

export default DemoInfo;

