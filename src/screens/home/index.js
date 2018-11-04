import React from 'react';
import { connect } from 'react-redux';
import PublicCollectionsList from '../../common/components/publicCollectionsList';
import { getCommunity } from '../../modules/home';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.getCommunity();
    }

    render() {

        const { collections, loading } = this.props;
        const homeScreen = (
            <React.Fragment>
                <PublicCollectionsList homePage={true} collections={collections.slice(0, 4)} />
            </React.Fragment>
        )
        const loadingScreen = (
            <p>Loading</p>
        )

        // if (this.props.loggedIn) {
        //     return <Redirect to="/collection" />;
        // } else {
            return loading ? (loadingScreen) : (homeScreen)
        // }
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommunity: () => dispatch(getCommunity())
});

const mapStateToProps = (state) => ({
    collections: state.home.collections,
    loading: state.home.loading,
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

