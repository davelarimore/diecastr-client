import React from 'react';
import { Link } from 'react-router-dom';
import './publicCollectionsList.scss';

export const PublicCollectionsList = (props) => {

    const viewMoreButton =
        <a className='thumbnail' href="./community">
            <div className='collectionOverlay'></div>
            <div className='viewMore'>
                <p>View More...</p>
            </div>
        </a>

    const collections = props.collections.map((collection, index) =>
        <Link to={'/collection/' + collection._id} key={index}>
            <div className='thumbnail'>
                <img className='thumbnailImg' alt={collection.userId.userName} src={collection.userId.avatarUrl} />
                <div className='collectionOverlay'></div>
                <div className='collectionOwner'>
                    <h2>{collection.userId.userName}</h2>
                </div>
            </div>
        </Link>
    );

    return (
        <section>
            <h1>Public Collections</h1>
            <div className='thumbnails'>
                {collections}
                {props.homePage ? viewMoreButton : null}
            </div>
        </section>
    )
}

export default PublicCollectionsList;