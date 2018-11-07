import { getModelDetail as getModel } from './api/models'
import { updateModelData as updateModel } from './api/models'
import { deleteModel as deleteMyModel } from './api/models'

// constants
export const MODEL_LOADING = 'MODEL_LOADING';
export const MODEL_ERROR = 'MODEL_ERROR';
export const MODEL_ADD = 'MODEL_ADD';
export const MODEL_SAVE = 'MODEL_SAVE';
export const SET_DELETED = 'SET_DELETED';
export const UNSET_DELETED = 'UNSET_DELETED';

// default state
const defaultState = {
    deleted: false,
    model: {},
}

// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case MODEL_LOADING:
            return state = {
                ...state,
                loading: action.loading
            }
        case MODEL_ERROR:
            return state = {
                ...state,
                error: action.error
            }
        case MODEL_ADD:
            return state = {
                ...state,
                model: action.model
            }
        case MODEL_SAVE:
            return state = {
                ...state,
                model: action.model
            }
        case SET_DELETED:
            return state = {
                ...state,
                deleted: true
            }
        case UNSET_DELETED:
            return state = {
                ...state,
                deleted: false
            }
        default: return state;
    }
}

// actions
export function setLoading(loading) {
    return { type: MODEL_LOADING, loading }
}
export function setError(error) {
    return { type: MODEL_ERROR, error }
}
export function addModel(model) {
    return { type: MODEL_ADD, model }
}
export function saveModel(model) {
    return { type: MODEL_SAVE, model }
}
export function setDeleted() {
    return { type: SET_DELETED }
}
export function unsetDeleted() {
    return { type: UNSET_DELETED }
}

// thunks
export const getModelDetail = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(setLoading(true));
    getModel(authToken, id)
        .then(model => {
            dispatch(setLoading(false));
            dispatch(addModel(model));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err));
        })
}

export const updateModelData = (modelData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(setLoading(true));
    updateModel(modelData, authToken)
        .then(model => {
            dispatch(setLoading(false));
            dispatch(saveModel(model));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err));
        })
}

export const deleteModel = (modelId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(setLoading(true));
    dispatch(setDeleted());
    deleteMyModel(modelId, authToken)
        .then(() => {            
            dispatch(setLoading(false));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err));
        })
}