import React from 'react';
import Radium from 'radium';
import colors from '../../../common/colors';
import UploadPhotoForm from './uploadPhotoForm';

const styles = {
    thumbnails: {
        position: 'relative',
        textAlign: 'left',
        lineHeight: 0,
        marginRight: '-2%',
        marginBottom: '-2%',
    },
    thumbnail: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: colors.darkGrey,
        textAlign: 'left',
        margin: '0 2% 2% 0',
        paddingBottom: '23%',
        width: '23%',
        // border: '1px solid rgba(0,0,0,0)',
        borderRadius: 8,
        overflow: 'hidden',
        '@media screen and (max-width: 420px)': {
            paddingBottom: '48%',
            width: '48%',
        }
    },
    thumbnailImg: {
        position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    overlay: {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
        opacity: 1,
    },
    h1: {
        fontSize: 24,
        fontWeight: 700,
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '1.4em',
        color: colors.darkText,
        margin: '0 0 15px 0',
    },
    buttonContainer: {
        display: 'inline-block',
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        bottom: 10,
        right: 0,
    }
}

export const ModelPhotos = (props) => {

    const photoCollection = [
        props.model.photo1Url,
        props.model.photo2Url,
        props.model.photo3Url,
        props.model.photo4Url,
    ];

    const photoList = photoCollection.map((photo, index) =>
        <div style={styles.thumbnail} key={index}>
            <img style={styles.thumbnailImg} alt={props.model.title} src={photo} />
            <div style={styles.overlay}>
                {props.loggedIn
                    ? <UploadPhotoForm photoKey={'photo' + (index + 1) + 'Url'} />
                    : null
                }</div>
        </div>
    )

    return (
        <section>
            <h1 style={styles.h1}>{props.model.title || 'New Model'}</h1>
            <div style={styles.thumbnails}>
                {photoList}
            </div>
        </section>
    );
}

export default Radium(ModelPhotos);