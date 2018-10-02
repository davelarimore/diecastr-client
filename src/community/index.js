import React from 'react';
import { connect } from 'react-redux';
import PublicCollectionsList from '../common/components/publicCollectionsList';

const Community = ({ users }) => (
    <React.Fragment>
        <PublicCollectionsList users={users} />
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    users: state.community.users
})

export default connect(mapStateToProps)(Community)

