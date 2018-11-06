import React from 'react';
import Radium from 'radium';
import AccountInfoForm from './accountInfoForm'
import UploadAvatarForm from './uploadAvatarForm';
import colors from '../../../common/colors';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    column: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '46%',
        borderRadius: 8,
        backgroundColor: '#DDD',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: 20,
        padding: 20,
        '@media screen and (max-width: 767px)': {
            width: '96%',
        },
        '@media screen and (max-width: 420px)': {
            width: '96%',
        }
    },
    avatar: {
        maxWidth: 100,
        float: 'left',
        marginRight: 20,
        borderRadius: 8,
        backgroundColor: colors.darkGrey,
    },
    avatarContainer: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: colors.darkGrey,
        textAlign: 'left',
        // margin: '0 2% 2% 0',
        paddingBottom: '40%',
        width: '40%',
        borderRadius: 8,
        overflow: 'hidden',
        '@media screen and (max-width: 420px)': {
            paddingBottom: '48%',
            width: '48%',
        }
    },
    avatarImg: {
        position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        width: '100%',
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        verticalAlign: 'text-bottom',
    },
}

export const AccountInfo = (props) => {

    return (
        <section>
            <h1>My Info</h1>
            <div style={styles.container}>
                <div style={styles.column}>
                <div style={styles.avatarContainer}>
                    <img style={styles.avatarImg} alt='Avatar' src={props.user.avatarUrl} />
                </div>
                    <UploadAvatarForm />
                </div>
                <div style={styles.column}>
                    <div style={styles.infoContainer}>
                        <AccountInfoForm user={props.user} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Radium(AccountInfo);

