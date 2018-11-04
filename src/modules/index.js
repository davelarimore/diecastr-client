import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import home from './home';
import community from './community';
import collection from './collection';
import modelDetail from './modelDetail';
import addModel from './addModel';
import account from './account';
import auth from './auth';
import protectedData from './protected-data';

export default combineReducers({
    home,
    community,
    collection,
    modelDetail,
    addModel,
    account,
    auth,
    protectedData,
    form: formReducer,
})