import React from 'react';
import { connect } from 'react-redux';
import CollectionHeader from './components/collectionHeader'
import ModelList from './components/modelList'

const CollectionContainer = ({ models, tags, visibilityFilter }) => (
    <React.Fragment>
        <CollectionHeader tags={tags}/>
        <ModelList models={models} visibilityFilter={visibilityFilter}/>
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    models: state.collection.models,
    tags: state.collection.tags,
    visibilityFilter: state.collection.visibilityFilter
})

export default connect(mapStateToProps)(CollectionContainer)

