import React from 'react';
import { connect } from 'react-redux'
import { updateCollectionData } from '../../../modules/collection'
import './toggle.scss'

export class Toggle extends React.Component {

    render() {
        return (
            <input type='button' className='toggle' key='toggle'
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

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)

