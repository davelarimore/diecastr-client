import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../../config';
import { updateModelData } from '../../../modules/modelDetail';
import { deletePhoto } from '../../../modules/api/photos';

import './uploadPhotoForm.css';

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
            deletePhoto(oldFileName, this.props.authToken)
    }

    render() {
        return (
            <div className='photoButtonContainer'>
                <form className='photoUploadForm'>
                    <label htmlFor={'upload' + this.props.photoKey} className='photoButton'>
                        Upload
                    </label>
                    <input
                        id={'upload' + this.props.photoKey}
                        className='photoUploadInput'
                        label='upload file'
                        type='file'
                        accept='image/*'
                        onChange={(e) => this.submitFile(e.target.files)} />
                </form>
                <p
                    className='photoButton'
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoForm);