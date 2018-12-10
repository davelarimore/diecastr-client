import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { createNewModel } from '../../modules/addModel';
import './addModelButton.scss';

export class AddModelButton extends React.Component {
    render() {
        const modelData = {
            collectionId: this.props.collectionId,
        }
        if (this.props.newModelId) {
            return <Redirect to={'/model/' + this.props.newModelId} />
        } else {

        return (
            <div className='addModelContainer'>
                <p className='addModelButton' onClick={() => this.props.createModel(modelData)}>+</p>
            </div>
        )}
    }
}

const mapStateToProps = state => ({
    collectionId: state.collection._id,
    newModelId: state.addModel.id
})

const mapDispatchToProps = dispatch => ({
    createModel: (modelData) => { dispatch(createNewModel(modelData)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddModelButton)