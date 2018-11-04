import React from 'react';
import Radium from 'radium';
import Toggle from './toggle';
// import colors from '../../../common/colors';

const styles = {
    h2: {
        fontSize: 24,
        fontWeight: 900,
        textTransform: 'uppercase',
        margin: '10px 0 5px 0',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 25,
    },
    stat: {
        width: '29%',
        backgroundColor: '#DDD',
        // border: '1px solid rgba(0,0,0,0)',
        borderRadius: 8,
        margin: '2%',
        padding: 20,
        '@media screen and (max-width: 767px)': {
            width: '96%',
        },
        '@media screen and (max-width: 420px)': {
            width: '96%',
        }
    },
    statTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    statValue: {
        fontSize: 32,
        lineHeight: '32px',
        fontWeight: 700,
    },
    toggleLabel: {
        // display: 'inline',
        // height:'24px',
        // lineHeight: '40px',
    }
}

export const CollectionStats = (props) => {

    const estTotal = props.models.length > 0
        ? props.models.reduce((prev, cur) => prev + (parseFloat(cur.estValue) || 0), 0)
        : 0;
    const paidTotal = props.models.length > 0
        ? props.models.reduce((prev, cur) => prev + (parseFloat(cur.purchasePrice) || 0), 0)
        : 0;

    return (
        <section>
            <h2 style={styles.h2}>My Collection</h2>
            <p style={styles.toggleLabel}>Public:&nbsp;
                <Toggle />
            </p>
            <div style={styles.container}>
                <div style={styles.stat}>
                    <p style={styles.statTitle}>Models in Collection</p>
                    <p style={styles.statValue}>{props.models.length > 0 ? props.models.length : 0}</p>
                </div>
                <div style={styles.stat}>
                    <p style={styles.statTitle}>Total Spent on Models</p>
                    <p style={styles.statValue}>${paidTotal}</p>
                </div>
                <div style={styles.stat}>
                    <p style={styles.statTitle}>Estimated Collection Value</p>
                    <p style={styles.statValue}>${estTotal}</p>
                </div>
            </div>
        </section>
    );
}

export default Radium(CollectionStats);