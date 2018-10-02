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

function CollectionStats(props) {

    const estTotal = props.models.reduce((prev, cur) => prev + cur.estValue, 0);

    return (
        <section>
            <h1>Collection Stats</h1>
            <p>Models in collection: {props.models.length}</p>
            <p>Total estimated collection value: ${estTotal}</p>
        </section>
    );
}

export default Radium(CollectionStats);