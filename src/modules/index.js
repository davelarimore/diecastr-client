import { combineReducers } from 'redux'
import home from './home';
import signUp from './signUp';
import login from './login';
import community from './community';
import collection from './collection';
import modelDetail from './modelDetail';
import account from './account';

export default combineReducers({
    home,
    signUp,
    login,
    community,
    collection,
    modelDetail,
    account
})