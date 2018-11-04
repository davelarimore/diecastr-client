import React from 'react';
import { connect } from 'react-redux';
import CollectionHeader from './components/collectionHeader';
import ModelList from './components/modelList';
import Pagination from './components/pagination';
import NoModels from './components/noModels';
import {
    FOR_SALE,
    NOT_FOR_SALE,
    SOLD,
    WANTED,
    SHOW_ALL,
    setFilter,
    getCollectionModels,
    getPublicCollectionModels,
    getModelDetail
} from '../../modules/collection';


const getVisibleModels = (models, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return models
        case FOR_SALE:
            return models.filter(model => model.status === 'For sale')
        case NOT_FOR_SALE:
            return models.filter(model => model.status === 'Not for sale')
        case SOLD:
            return models.filter(model => model.status === 'Sold')
        case WANTED:
            return models.filter(model => model.status === 'Wanted')
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
class CollectionContainer extends React.Component {
 
    componentDidMount() {
        const {match, getPublicCollectionModels, getCollectionModels } = this.props
        if (match.params.id) {
            getPublicCollectionModels(match.params.id);

        } else {
        getCollectionModels();
        }
    }

    render() {
        const { models, setFilter, loading, collectionName } = this.props;
        const collectionList = (
            <React.Fragment>
                <CollectionHeader setFilter={setFilter} collectionName={collectionName}/>
                <ModelList models={models} getModelDetail={getModelDetail}/>
                {models.length > 0 ? <Pagination /> : <NoModels />}
            </React.Fragment>
        )
        const loadingScreen = (
            <p>Loading</p>
        )
        return loading ? (loadingScreen) : (collectionList)
    }
}

const mapDispatchToProps = (dispatch) => ({
    setFilter: filter => dispatch(setFilter(filter)),
    getCollectionModels: () => dispatch(getCollectionModels()),
    getPublicCollectionModels: (collectionId) => dispatch(getPublicCollectionModels(collectionId, 1)),
    getModelDetail: modelId => dispatch(getModelDetail(modelId)),
});

const mapStateToProps = (state) => ({
    models: getVisibleModels(state.collection.models, state.collection.modelFilter),
    loading: state.collection.loading,
    collectionName: state.collection.name,
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer)