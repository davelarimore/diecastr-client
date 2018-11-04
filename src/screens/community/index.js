import React from 'react';
import { connect } from 'react-redux';
import PublicCollectionsList from '../../common/components/publicCollectionsList';
import { getCommunity } from '../../modules/community';

class Community extends React.Component {
    
    componentDidMount() {
        this.props.getCommunity();
    }
    render() {
        const { collections, loading } = this.props;
        const communityScreen = (
            <React.Fragment>
                <PublicCollectionsList collections={collections} />
            </React.Fragment>
        )
        const loadingScreen = (
            <p>Loading</p>
        )
        return loading ? (loadingScreen) : (communityScreen)
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCommunity: () => dispatch(getCommunity())
});

const mapStateToProps = (state) => ({
    collections: state.community.collections,
    loading: state.community.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Community)