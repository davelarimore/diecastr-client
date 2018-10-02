import React from 'react';
import { connect } from 'react-redux';
import AccountHeader from './components/accountHeader'
import CollectionStats from './components/collectionStats'

const AccountContainer = ({ models }) => (
    <React.Fragment>
        <AccountHeader />
        <CollectionStats models={models}/>
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    models: state.account.models,
})

export default connect(mapStateToProps)(AccountContainer)

