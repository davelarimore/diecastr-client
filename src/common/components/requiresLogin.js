import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../../common/components/loading';

export default () => Component => {
    function RequiresLogin(props) {
        const { authenticating, loggedIn, error, ...passThroughProps } = props;
        if (authenticating) {
            return <Loading message='Loggin in...' />;
        } else if (!loggedIn || error) {
            return <Redirect to="/" />;
        }

        return <Component {...passThroughProps} />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.loading,
        loggedIn: state.auth.currentUserId !== null,
        error: state.auth.error
    });

    return connect(mapStateToProps)(RequiresLogin);
};