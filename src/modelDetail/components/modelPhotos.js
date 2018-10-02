import React from 'react';
import Radium from 'radium';
import colors from '../../common/colors';
import mediaQueries from '../../common/mediaQueries';

const styles = {
    thumbnail: {
        position: 'relative',
        display: 'inline-block',
        backgroundColor: colors.accentColor,
        textAlign: 'left',
        margin: '0 1% 1% 0',
        paddingBottom: '24%',
        width: '24%',
        height: 0,
        overflow: 'hidden',
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
    overlay: {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
        opacity: '1',
    },
    h2: {
        fontSize: 16,
        lineHeight: '1.4em',
        color: 'white',
        margin: 0,
        padding: 0,
    },
    editButton: {
        display: 'inline-block',
        position: 'absolute',
        bottom: 5,
        right: 10,
    }
}

export const ModelPhotos = (props) => {

    const photos = props.model.photos.map((photo, index) => 
        <div style={styles.thumbnail} key={index}>
            <img style={styles.thumbnailImg} alt={props.model.title} src={photo} />
            <div style={styles.overlay}></div>
            <div style={styles.editButton}><h2 style={styles.h2}>Edit</h2></div>
        </div>
    )

    return (
        <section style={styles.thumbnails}>
            {photos}
        </section>
    );
}

export default Radium(ModelPhotos);