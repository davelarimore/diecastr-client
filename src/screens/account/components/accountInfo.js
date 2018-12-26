import React from 'react';
import AccountInfoForm from './accountInfoForm'
import UploadAvatarForm from './uploadAvatarForm';
import './accountInfo.scss'

export const AccountInfo = (props) => {

    return (
        <section>
            <h1>My Info</h1>
            <div className='container'>
                <div className='column'>
                    <div className='avatarContainer'>
                        <img className='avatarImg' alt='Avatar' src={props.user.avatarUrl} />
                </div>
                    <UploadAvatarForm />
                </div>
                <div className='column'>
                    <div className='infoContainer'>
                        <AccountInfoForm user={props.user} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountInfo;

