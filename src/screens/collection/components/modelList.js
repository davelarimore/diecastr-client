import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import colors from '../../../common/colors';

const styles = {
    thumbnails: {
        position: 'relative',
        textAlign: 'left',
        lineHeight: '0',
        marginRight: '-3%',
        marginBottom: '-3%',
    },
    thumbnail: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: colors.darkGrey,
        textAlign: 'left',
        margin: '0 3% 3% 0',
        paddingBottom: '22%',
        width: '22%',
        cursor: 'pointer',
        // border: '1px solid rgba(0,0,0,0)',
        borderRadius: 8,
        overflow: 'hidden',
        '@media screen and (max-width: 768px)': {
            paddingBottom: '30%',
            width: '30%',
        },
        '@media screen and (max-width: 420px)': {
            paddingBottom: '47%',
            width: '47%',
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
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 75%, rgba(0,0,0,0.65) 100%)',
        opacity: '1',
    },
    h2: {
        fontSize: '16px',
        lineHeight: '1.4em',
        color: colors.thumbnailText,
        margin: 0,
        padding: 0,
    },
    modelTitle: {
        display: 'inline-block',
        position: 'absolute',
        top: 8,
        left: 10,
        width: '90%',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
    },
    modelBrand: {
        display: 'inline-block',
        position: 'absolute',
        bottom: 5,
        left: 10,
    },
    modelScale: {
        display: 'inline-block',
        position: 'absolute',
        bottom: 5,
        right: 10,
    },
    truncated: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }
}

export const ModelList = (props) => {
    
    const models = props.models.map((model) =>
        <Link to={'/model/' + model._id} key={model._id}>
            <div style={styles.thumbnail}>
                <div>
                    <img style={styles.thumbnailImg} alt={model.title} src={model.photo1Url} />
                    <div style={styles.overlay}></div>
                    <div style={styles.modelTitle}><h2 style={[styles.h2, styles.truncated]}>{model.title}</h2></div>
                    <div style={styles.modelBrand}><h2 style={styles.h2}>{model.modelMfg}</h2></div>
                    <div style={styles.modelScale}><h2 style={styles.h2}>{model.scale}</h2></div>
                </div>
            </div>
        </Link>
    );

    return (
        <section style={styles.thumbnails}>
            {models}
        </section>
    )
}

export default Radium(ModelList);