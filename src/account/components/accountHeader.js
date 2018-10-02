import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
// import mediaQueries from '../../common/mediaQueries';

// const styles = {
//     nav: {
//         padding: '10px 0',
//         backgroundColor: '#aaa',
//     },
//     ul: {
//         listStyle: 'none',
//         padding: '0',
//         margin: '0',
//     },
//     li: {
//         display: 'inline-block',
//         position: 'relative',
//         margin: '0 10px',
//     },
// }

export const AccountHeader = () => {
    return (
        <section>
            <h1>My Account</h1>
        </section>
    );
}

export default Radium(AccountHeader);