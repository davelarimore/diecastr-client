import React from 'react';
import './collectionHeader.scss'

export const CollectionHeader = (props) => {
    return (
        <section>
            <h1 className='collectionTitle'>{props.collectionName}</h1>
        </section>
    );
}

export default CollectionHeader;