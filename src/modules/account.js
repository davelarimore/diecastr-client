import { getUser, updateUser } from './api/users'

// constants
export const ACCOUNT_LOADING = 'ACCOUNT_LOADING';
export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';
export const ACCOUNT_ADD = 'ACCOUNT_ADD';
export const ACCOUNT_UPDATE = 'ACCOUNT_UPDATE';

const defaultState = {
    user: {
        userName: '',
        email: '',
        avatarUrl: '',
        collections: [],
        models: [],
    }
}

// reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case ACCOUNT_LOADING:
            return state = {
                ...state,
                loading: action.loading
            }
        case ACCOUNT_ERROR:
            return state = {
                ...state,
                error: action.error
            }
        case ACCOUNT_ADD:
            return state = {
                ...state,
                user: action.user
            }
        case ACCOUNT_UPDATE:
            return state = {
                ...state,
                user: action.user
            }
        default: return state;
    }
}

// actions
export function setLoading(loading) {
    return { type: ACCOUNT_LOADING, loading }
}
export function setError(error) {
    return { type: ACCOUNT_ERROR, error }
}
export function addUser(user) {
    return { type: ACCOUNT_ADD, user }
}
export function updateUserInfo(user) {
    return { type: ACCOUNT_UPDATE, user }
}

// thunks
export const getAccount = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    getUser()
        .then(user => {
            dispatch(setLoading(false));
            dispatch(addUser(user))
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}

export const updateUserData = (userData) => (dispatch, getState) => {
    dispatch(setLoading(true));
    updateUser(userData)
        .then(user => {
            dispatch(setLoading(false));
            dispatch(addUser(user))
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setError(err))
        })
}