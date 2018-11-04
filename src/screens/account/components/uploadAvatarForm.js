import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../../config';
import { updateUserData } from '../../../modules/account';
import { deletePhoto } from '../../../modules/api/photos';

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '60%',
        paddingLeft: 20,
    },
    title: {
        width: '100%',
        marginBottom: 15,
    },
    form: {
        zIndex: 5,
    },
    fileInput: {
        display: 'none',
    },
    uploadButton: {
        flex: '0 0 10%',
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: 4,
        display: 'inline-block',
        backgroundColor: '#FFF',
        padding: '6px 12px',
        cursor: 'pointer',
        margin: '5px 10px',
        ':hover': {
            color: '#CCC',
        },
    }
}

class UploadAvatarForm extends React.Component {
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
            deletePhoto(oldFileName)
    }

    render() {
        return (                
                <div style={styles.buttonContainer}>
                    <p style={styles.title}>Profile Image</p>
                    <form style={styles.form}>
                        <label htmlFor="file-upload" style={styles.uploadButton} key='upload'>
                            Upload
                    </label>
                        <input
                            id="file-upload"
                            style={styles.fileInput}
                            label='upload file'
                            type='file'
                            accept='image/*'
                            onChange={(e) => this.submitFile(e.target.files)} />
                    </form>
                    <p
                        style={styles.uploadButton}
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

export default Radium(connect(mapStateToProps, mapDispatchToProps)(UploadAvatarForm));