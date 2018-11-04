import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import requiresLogin from '../../common/components/requiresLogin';
import ModelPhotos from './components/modelPhotos';
import ModelForm from './components/modelForm';
import { getModelDetail, unsetDeleted } from '../../modules/modelDetail';
import { unsetNew } from '../../modules/addModel';

class ModelDetailContainer extends React.Component {
    
    componentDidMount() {
        this.props.getModelDetail(this.props.match.params.id);
        this.props.unsetNew();
    }

    componentWillUnmount() {
        this.props.unsetDeleted();
    }

    
    render() {
        const { model, loading, loggedIn, deleted } = this.props;
    
        if (deleted) {
            return <Redirect to={'/collection'} />
        }

        const modelDetailScreen = (
            <React.Fragment>
                <ModelPhotos model={model} loggedIn={loggedIn}/>
                <ModelForm model={model} loggedIn={loggedIn}/>
            </React.Fragment>
        )
        const loadingScreen = (
            <p>Loading</p>
        )
        return loading ? (loadingScreen) : (modelDetailScreen)
    }
}

const mapDispatchToProps = (dispatch) => ({
    getModelDetail: (modelId) => dispatch(getModelDetail(modelId)),
    unsetNew: () => dispatch(unsetNew()),
    unsetDeleted: () => dispatch(unsetDeleted())
});

const mapStateToProps = (state) => ({
    model: state.modelDetail.model,
    loading: state.modelDetail.loading,
    loggedIn: state.auth.currentUserId === state.modelDetail.model.userId,
    deleted: state.modelDetail.deleted
})

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(ModelDetailContainer))