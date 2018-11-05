import React from 'react';
import { connect } from 'react-redux';
import AccountInfo from './components/accountInfo'
import CollectionStats from './components/collectionStats';
import requiresLogin from '../../common/components/requiresLogin';
import Loading from '../../common/components/loading';
import { getAccount } from '../../modules/account';

class AccountContainer extends React.Component {
   
    componentDidMount() {
        this.props.getAccount();
    }
    render() {
        const { user, loading } = this.props;
        const accountDetailScreen = (
            <React.Fragment>
                <AccountInfo user={user} />
                <CollectionStats models={user.models} />
            </React.Fragment>
        )
        const loadingScreen = (
            <Loading message='Loading...' />
        )
        return loading ? (loadingScreen) : (accountDetailScreen)
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAccount: () => dispatch(getAccount()),
});

const mapStateToProps = (state) => ({
    user: state.account.user,
    loading: state.account.loading,
})

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(AccountContainer))