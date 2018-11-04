import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../../config';
import { updateModelData } from '../../../modules/modelDetail';
import { deletePhoto } from '../../../modules/api/photos';

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        bottom: 10,
        right: 0,
    },
    form: {
        zIndex: 5,
    },
    fileInput: {
        display: 'none',
    },
    uploadButton: {
        flex: '0 1 10%',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: '14px',
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: 4,
        display: 'inline-block',
        backgroundColor: '#FFF',
        padding: '6px 12px',
        cursor: 'pointer',
        margin: '0 5%',
        ':hover': {
            backgroundColor: '#CCC',
        },
        '@media screen and (maxWidth: 420px)': {
            fontSize: 10,
        }
    }
}

export class UploadPhotoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            file: null
        };
    }

    submitFile = (files) => {
        const key = this.props.photoKey;
        const formData = new FormData();
        formData.append('file', files[0]);
        return fetch(`${API_BASE_URL}/photos`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.props.authToken}`,
            },
            body: formData
        })
            .then(response => response.json())
            .then(responseJson => {
                const modelData = {
                    ...this.props.modelData,
                    [key]: responseJson.Location,
                }
                this.props.updateModelData(modelData)
            })
    }

    deleteFile = () => {
        const oldUrl = this.props.modelData[this.props.photoKey]
        const oldFileName = oldUrl.substring(oldUrl.lastIndexOf('/') + 1);

        const modelData = {
            ...this.props.modelData,
            [this.props.photoKey]: 'https://s3.amazonaws.com/diecastr/placeholders/model-placeholder.svg',
        }
        
        // Delete from model (use placeholder)
        this.props.updateModelData(modelData)
        // Delete from S3
        if (oldFileName !== 'model-placeholder.svg')
        deletePhoto(oldFileName)
    }

    render() {
        return (
            <div style={styles.buttonContainer}>
                <form style={styles.form}>
                    <label htmlFor={'upload' + this.props.photoKey} style={styles.uploadButton}>
                        Upload
                    </label>
                    <input
                        id={'upload' + this.props.photoKey}
                        style={styles.fileInput}
                        label='upload file'
                        type='file'
                        accept='image/*'
                        onChange={(e) => this.submitFile(e.target.files)} />
                </form>
                <p
                    style={styles.uploadButton}
                    onClick={() => this.deleteFile()}>
                    Delete
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
    modelData: state.modelDetail.model,
})

const mapDispatchToProps = dispatch => ({
    updateModelData: modelData => { dispatch(updateModelData(modelData)) },
})

export default Radium(connect(mapStateToProps, mapDispatchToProps)(UploadPhotoForm));