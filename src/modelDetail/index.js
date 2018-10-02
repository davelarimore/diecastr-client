import React from 'react';
import { connect } from 'react-redux';
import ModelHeader from './components/modelHeader';
import ModelPhotos from './components/modelPhotos';
import ModelForm from './components/modelForm';


const ModelDetailContainer = ({ models }) => (
    <React.Fragment>
        <ModelHeader model={models[0]} />
        <ModelPhotos model={models[0]} />
        <ModelForm model={models[0]} />
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    models: state.modelDetail.models
})

export default connect(mapStateToProps)(ModelDetailContainer)


