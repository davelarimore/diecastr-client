import { createNewModel as createModel } from './api/models'

// constants
export const ADD_MODEL_LOADING = 'ADD_MODEL_LOADING';
export const ADD_MODEL_ERROR = 'ADD_MODEL_ERROR';
export const ADD_MODEL_SAVE = 'ADD_MODEL_SAVE';
export const UNSET_NEW = 'UNSET_NEW'

// default state
const defaultState = {
    id: null,
}

// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case ADD_MODEL_LOADING:
            return state = {
                ...state,
                loading: action.loading
            }
        case ADD_MODEL_ERROR:
            return state = {
                ...state,
                error: action.error
            }
        case ADD_MODEL_SAVE:
            return state = {
                ...state,
                id: action.id
            }
        case UNSET_NEW:
            return state = {
                ...state,
                id: null
            }
        default: return state;
    }
}

// actions
export function setLoading(loading) {
    return { type: ADD_MODEL_LOADING, loading }
}
export function setError(error) {
    return { type: ADD_MODEL_ERROR, error }
}
export function saveModel(id) {
    return { type: ADD_MODEL_SAVE, id }
}
export function unsetNew() {
    return { type: UNSET_NEW }
}

// thunks
export const createNewModel = (modelData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(setLoading(true));
    createModel(modelData, authToken)
        .then(model => {
            dispatch(setLoading(false));
            dispatch(saveModel(model._id))
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}