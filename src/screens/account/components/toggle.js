import React from 'react';
import { connect } from 'react-redux'
import Radium from 'radium';
import { updateCollectionData } from '../../../modules/collection'
import colors from '../../../common/colors'

const styles = {
    button: {
        fontSize: 12,
        fontWeight: 700,
        textTrandform: 'uppercase',
        color: '#FFF',
        outline: 'none',
        border: 'none',
        borderRadius: 4,
        backgroundColor: colors.darkGrey,
        padding: '6px 15px',
        margin: 5,
        cursor: 'pointer',
        verticalAlign: '2px',
    },
    ':hover': {
        color: colors.brandColor,
    },
}

export class Toggle extends React.Component {

    render() {
        return (
            <input type='button' style={styles.button} key='toggle'
                value={this.props.isPublic ? 'YES' : 'NO'}
                onClick={() => this.props.setPublic(!this.props.isPublic, this.props.collectionId)} />
        );
    }
}

const mapStateToProps = state => ({
    isPublic: state.collection.public,
    collectionId: state.collection._id
})

const mapDispatchToProps = dispatch => ({
    setPublic: (isPublic, id) => dispatch(updateCollectionData({ public: isPublic, id }))
})

export default Radium(connect(mapStateToProps, mapDispatchToProps)(Toggle))

