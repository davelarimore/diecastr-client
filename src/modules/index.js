import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import home from './home';
import community from './community';
import collection from './collection';
import modelDetail from './modelDetail';
import addModel from './addModel';
import account from './account';
import auth from './auth';

export default combineReducers({
    home,
    community,
    collection,
    modelDetail,
    addModel,
    account,
    auth,
    form: formReducer,
})