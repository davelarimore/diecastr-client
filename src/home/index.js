import React from 'react';
import { connect } from 'react-redux';
import PublicCollectionsList from '../common/components/publicCollectionsList';
import OnboardingSection from './components/onboardingSection';
import ViewAllCollectionsLink from './components/viewAllCollectionsLink';

const Home = ({ users }) => (
    <React.Fragment>
        <OnboardingSection />
        <PublicCollectionsList users={users.slice(0, 4)} />
        <ViewAllCollectionsLink />
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    users: state.home.users
})

export default connect(mapStateToProps)(Home)

