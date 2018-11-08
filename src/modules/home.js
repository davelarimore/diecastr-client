import { getCommunityCollections } from './api/collections'

// constants
export const HOME_LOADING = 'HOME_LOADING';
export const HOME_ERROR = 'HOME_ERROR';
export const HOME_ADD = 'HOME_ADD';

// default state
const defaultState = {
    collections: [
        {
            userId: '',
        }
    ],
    loading: true,
}

// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case HOME_LOADING:
            return state = {
                ...state,
                loading: action.loading
            }
        case HOME_ERROR:
            return state = {
                ...state,
                error: action.error
            }
        case HOME_ADD:
            return state = {
                ...state,
                collections: action.collections
            }
        default: return state;
    }
}

// actions
export function setLoading(loading) {
    return { type: HOME_LOADING, loading }
}
export function setError(error) {
    return { type: HOME_ERROR, error }
}
export function addCollections(collections) {
    return { type: HOME_ADD, collections }
}

// thunks
export const getCommunity = () => dispatch => {
    dispatch(setLoading(true));
    getCommunityCollections()
        .then(collections => {
            dispatch(setLoading(false));
            dispatch(addCollections(collections))
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}