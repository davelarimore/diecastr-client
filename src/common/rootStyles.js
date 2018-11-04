import images from './images'
import colors from './colors'

export default {
    '*': {
        boxSizing: 'border-box',
    },
    html: {
        minHeight: '100%',
        position: 'relative',
    },
    body: {
        overscrollBehaviorY: 'none',
        fontFamily: "'Lato', sans-serif",
        fontSize: 18,
        backgroundImage: images.pegboard,
        backgroundColor: '#F3F3F3',
        textAlign: 'center',
        lineHeight: '1.5em',
        minWidth: 320,
        color: '#444',
        padding: 0,
        margin: '0 0 80px 0',
    },
    section: {
        padding: '20px 0 0 0',
        '@media screen and (max-width: 767px)': {
            padding: '20px 20px 0 20px',
        }
    },
    h1: {
        fontSize: 24,
        fontWeight: 900,
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '1.4em',
        color: colors.darkText,
        margin: '0 0 15px 0',
    },
    p: {
        margin: '0 auto',
    },
    a: {
        fontSize: 16,
        color: colors.darkText,
        textDecoration: 'none',
    }
}
