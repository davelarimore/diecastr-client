import { getCollectionModels as getModels } from './api/collections'
import { getPublicCollectionModels as getPublicModels } from './api/collections'
import { updateMyCollection as updateCollection } from './api/collections'
import { getModelDetail as getModel } from './api/models'

// constants
export const FOR_SALE = 'FOR_SALE';
export const NOT_FOR_SALE = 'NOT_FOR_SALE';
export const SOLD = 'SOLD';
export const WANTED = 'WANTED';
export const SHOW_ALL = 'SHOW_ALL';

export const SET_FILTER = 'SET_FILTER';
export const SET_PAGE = 'SET_PAGE';
export const SET_COLLECTION_ATTRIBUTE = 'SET_COLLECTION_ATTRIBUTE';
export const COLLECTION_LOADING = 'COLLECTION_LOADING';
export const COLLECTION_ERROR = 'COLLECTION_ERROR';

// default state
const defaultState = {
    modelFilter: SHOW_ALL,
    currentPage: 1,
    pageTotal: 1,
    models: [],
    public: '',
    id: '',
    userId: ''
}

// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case SET_FILTER:
            return state = { ...state, modelFilter: action.filter };
        case SET_PAGE:
            return state = { ...state, currentPage: action.page };
        case SET_COLLECTION_ATTRIBUTE:
            return state = { ...state, ...action.collectionAttribute };
        case COLLECTION_LOADING:
            return state = { ...state, loading: action.loading }
        case COLLECTION_ERROR:
            return state = { ...state, error: action.error }
        default: return state;
    }
}

// actions
export function setFilter(filter) {
    return { type: SET_FILTER, filter };
}
export function setPage(page) {
    return { type: SET_PAGE, page };
}
export function setLoading(loading) {
    return { type: COLLECTION_LOADING, loading }
}
export function setError(error) {
    return { type: COLLECTION_ERROR, error }
}
export function setCollectionAttribute(collectionAttribute) {
    return { type: SET_COLLECTION_ATTRIBUTE, collectionAttribute }
}

// thunks
export const getCollectionModels = (currentPage = 1) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const pageSize = 12;
    dispatch(setLoading(true));
    return getModels(currentPage, pageSize, authToken)
        .then(collection => {
            dispatch(setLoading(false));
            dispatch(setCollectionAttribute(collection));
            dispatch(setPage(currentPage));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}

export const getModelDetail = () => (dispatch, getState, modelId) => {
    const authToken = getState().auth.authToken;
    dispatch(setLoading(true));
    getModel(authToken, modelId)
        .then(model => {
            dispatch(setLoading(false));
            dispatch(setCollectionAttribute(model));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}

//toggle collection sharing from account screen
export const updateCollectionData = (collectionData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(setLoading(true));
    updateCollection(collectionData, authToken)
        .then(() => {
            dispatch(setLoading(false));
            dispatch(setCollectionAttribute(collectionData))
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}

export const getPublicCollectionModels = (collectionId, currentPage = 1) => (dispatch, getState) => {
    const pageSize = 12;
    //don't reload whole screen on subsequent pages
    if (currentPage === 1) {
        dispatch(setLoading(true));
    }
    return getPublicModels(collectionId, currentPage, pageSize)
        .then(collection => {
            dispatch(setLoading(false));
            dispatch(setCollectionAttribute(collection));
            dispatch(setPage(currentPage));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}