import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Radium from 'radium';
import { createNewModel } from '../../modules/addModel';
import colors from '../colors';

const styles = {
    container: {
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 5,
    },
    button: {
        display: 'inline-block',
        position: 'relative',
        float: 'right',
        width: 64,
        height: 64,
        fontSize: 36,
        lineHeight: '24px',
        padding: 15,
        border: '4px solid white',
        borderRadius: 8,
        color: colors.lightText,
        cursor: 'pointer',
        backgroundColor: '#FB454F',
        ':hover': {
            color: colors.darkText,
            backgroundColor: colors.accentColor,
        }
    },
}

export class AddModelButton extends React.Component {
    render() {
        const modelData = {
            collectionId: this.props.collectionId,
        }
        if (this.props.newModelId) {
            return <Redirect to={'/model/' + this.props.newModelId} />
        } else {

        return (
            <div style={styles.container}>
                <p style={styles.button} onClick={() => this.props.createModel(modelData)}>+</p>
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

export default Radium(connect(mapStateToProps, mapDispatchToProps)(AddModelButton))