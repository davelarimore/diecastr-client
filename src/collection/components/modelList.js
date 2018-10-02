import React from 'react';
import Radium from 'radium';
import colors from '../../common/colors';
import mediaQueries from '../../common/mediaQueries';

const styles = {
    thumbnails: {
        position: 'relative',
        textAlign: 'left',
        lineHeight: '0',
        marginRight: '-1%',
        marginBottom: '-1%',
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
    overlay: {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0.65) 100%)',
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
        top: 10,
        left: 10,
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
    }
}

export const ModelList = (props) => {

    const models = props.models.map((model, index) =>
        <a style={styles.thumbnail} href="./model" key={index}>
            <div>
                <img style={styles.thumbnailImg} alt={model.title} src={model.img1Url} />
                <div style={styles.overlay}></div>
                <div style={styles.modelTitle}><h2 style={styles.h2}>{model.title}</h2></div>
                <div style={styles.modelBrand}><h2 style={styles.h2}>{model.modelMfg}</h2></div>
                <div style={styles.modelScale}><h2 style={styles.h2}>{model.scale}</h2></div>
            </div>
        </a>
    );

    return (
        <section style={styles.thumbnails}>
            {models}
        </section>
    )
}

export default Radium(ModelList);