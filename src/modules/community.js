import { getCommunityCollections } from './api/collections'

// constants
export const COMMUNITY_LOADING = 'COMMUNITY_LOADING';
export const COMMUNITY_ERROR = 'COMMUNITY_ERROR';
export const COMMUNITY_ADD = 'COMMUNITY_ADD';

// default state
const defaultState = {
    collections: [
        {
            userId: '',
        }
    ],
}

// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case COMMUNITY_LOADING:
            return state = {
                ...state,
                loading: action.loading
            }
        case COMMUNITY_ERROR:
            return state = {
                ...state,
                error: action.error
            }
        case COMMUNITY_ADD:
            return state = {
                ...state,
                collections: action.collections
            }
        default: return state;
    }
}

// actions
export function setLoading(loading) {
    return { type: COMMUNITY_LOADING, loading }
}
export function setError(error) {
    return { type: COMMUNITY_ERROR, error }
}
export function addCollections(collections) {
    return { type: COMMUNITY_ADD, collections }
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