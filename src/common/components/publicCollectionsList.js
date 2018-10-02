import React from 'react';
import Radium from 'radium';
import colors from '../../common/colors';
import mediaQueries from '../../common/mediaQueries';

const styles = {
    thumbnails: {
        position: 'relative',
        textAlign: 'left',
        lineHeight: '0',
        marginRight: -15,
        // marginBottom: '-15px',
    },
    thumbnail: {
        position: 'relative',
        display: 'inline-block',
        backgroundColor: colors.accentColor,
        textAlign: 'left',
        margin: '0 1% 1% 0',
        paddingBottom: '24%',
        width: '24%',
        height: '0',
        overflow: 'hidden',
        [mediaQueries.breakpointLarge]: {
            paddingBottom: '32%',
            width: '32%',
        },
        [mediaQueries.breakpointSmall]: {
            paddingBottom: '49%',
            width: '49%',
        }
    },
    thumbnailImg: {
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        right: '-9999px',
        bottom: '-9999px',
        margin: 'auto',
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
    },
    overlay: {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
        opacity: '1',
    }
}

function PublicCollectionsList(props) {

    const collections = props.users.map((user, index) =>
        <a style={styles.thumbnail} href="./collection" key={index}>
            <img style={styles.thumbnailImg} alt={user.name} src={user.image} />
            <div style={styles.overlay}></div>
            <div style={styles.collectionOwner}>
                <h2 style={styles.h2}>{user.name}</h2>
            </div>
        </a>
    );

    return (
        <section>
            <h1>Public Collections</h1>
            <div style={styles.thumbnails}>
                {collections}
            </div>
        </section>
    )
}

export default Radium(PublicCollectionsList);