import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import colors from '../colors';

const styles = {
    thumbnails: {
        position: 'relative',
        textAlign: 'left',
        lineHeight: '0',
        marginRight: '-3%',
        marginBottom: 15,
    },
    thumbnail: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: colors.darkGrey,
        textAlign: 'left',
        margin: '0 3% 3% 0',
        paddingBottom: '22%',
        width: '22%',
        // border: '1px solid rgba(0,0,0,0)',
        borderRadius: 8,
        overflow: 'hidden',
        '@media screen and (max-width: 768px)': {
            paddingBottom: '47%',
            width: '47%',
        },
    },
    thumbnailImg: {
        position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    h2: {
        fontSize: 16,
        lineHeight: '1.4em',
        color: 'white',
        margin: '0',
        padding: '0',
    },
    collectionOwner: {
        display: 'inline-block',
        position: 'absolute',
        bottom: 5,
        left: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    overlay: {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 75%,rgba(0,0,0,0.65) 100%)',
        opacity: '1',
    },
    viewMore: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        bottom: 0,
        left: 0,
        color: colors.lightText,
        fontSize: 22,
        lineHeight: '1.4em',
        fontWeight: 400,
    },
}

export const PublicCollectionsList = (props) => {
    
    const viewMoreButton =  
         <a style={styles.thumbnail} href="./community">
                <div style={styles.overlay}></div>
                <div style={styles.viewMore}>
                <p>View More...</p>
                </div>
            </a>

    const collections = props.collections.map((collection, index) =>
        <Link to={'/collection/' + collection._id} key={index}>
        <div style={styles.thumbnail}>
            <img style={styles.thumbnailImg} alt={collection.userId.userName} src={collection.userId.avatarUrl} />
            <div style={styles.overlay}></div>
            <div style={styles.collectionOwner}>
                <h2 style={styles.h2}>{collection.userId.userName}</h2>
            </div>
        </div>
        </Link>
    );

    return (
        <section>
            <h1>Public Collections</h1>
            <div style={styles.thumbnails}>
                {collections}
                {props.homePage ? viewMoreButton : null}
            </div>
        </section>
    )
}

export default Radium(PublicCollectionsList);