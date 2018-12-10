import React from 'react';
import Toggle from './toggle';
import './collectionStats.scss'

export const CollectionStats = (props) => {

    const estTotal = props.models.length > 0
        ? props.models.reduce((prev, cur) => prev + (parseFloat(cur.estValue) || 0), 0)
        : 0;
    const paidTotal = props.models.length > 0
        ? props.models.reduce((prev, cur) => prev + (parseFloat(cur.purchasePrice) || 0), 0)
        : 0;

    return (
        <section>
            <h2 >My Collection</h2>
            <p className='toggleLabel'>Public:&nbsp;
                <Toggle />
            </p>
            <div className='container'>
                <div className='stat'>
                    <p className='statTitle'>Models in Collection</p>
                    <p className='statValue'>{props.models.length > 0 ? props.models.length : 0}</p>
                </div>
                <div className='stat'>
                    <p className='statTitle'>Total Spent on Models</p>
                    <p className='statValue'>${paidTotal}</p>
                </div>
                <div className='stat'>
                    <p className='statTitle'>Estimated Collection Value</p>
                    <p className='statValue'>${estTotal}</p>
                </div>
            </div>
        </section>
    );
}

export default CollectionStats;