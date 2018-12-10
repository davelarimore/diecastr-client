import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../../config';
import { updateUserData } from '../../../modules/account';
import { deletePhoto } from '../../../modules/api/photos';
import './uploadAvatarForm.scss';

export class UploadAvatarForm extends React.Component {
    constructor() {
        super();
        this.state = {
            file: null
        };
    }

    submitFile = (files) => {
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
                const userData = {
                    ...this.props.userData,
                    avatarUrl: responseJson.Location,
                }
                this.props.updateUserData(userData)
            })
    }

    deleteFile = () => {
        const oldUrl = this.props.userData.avatarUrl;
        const oldFileName = oldUrl.substring(oldUrl.lastIndexOf('/') + 1);

        const userData = {
            ...this.props.userData,
            avatarUrl: 'https://s3.amazonaws.com/diecastr/placeholders/user-placeholder.svg',
        }
        this.props.updateUserData(userData);

        // Delete from S3
        if (oldFileName !== 'user-placeholder.svg')
            deletePhoto(oldFileName, this.props.authToken)
    }

    render() {
        return (                
                <div className='buttonContainer'>
                    <p className='avatarFormTitle'>Profile Image</p>
                    <form className='avatarForm'>
                    <label className='avatarFormButton' htmlFor="file-upload" key='upload'>
                            Upload
                    </label>
                        <input
                            id="file-upload"
                            className='avatarFormFileInput'
                            label='upload file'
                            type='file'
                            accept='image/*'
                            onChange={(e) => this.submitFile(e.target.files)} />
                    </form>
                    <p
                        className='avatarFormButton'
                        key='delete'
                        onClick={() => this.deleteFile()}>
                        Delete
                </p>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    authToken: state.auth.authToken,
    userData: state.account.user,
})

const mapDispatchToProps = dispatch => ({
    updateUserData: userData => { dispatch(updateUserData(userData)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadAvatarForm);