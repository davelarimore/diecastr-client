import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { loadAuthToken } from '../utils/local-storage';

import { saveAuthToken, clearAuthToken } from '../utils/local-storage';

// constants
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const DECODE_TOKEN = 'DECODE_TOKEN';

const authToken = loadAuthToken();

// default state
const initialState = {
    authToken: authToken ? authToken : null, // authToken !== null does not mean it has been validated
    currentUserId: null,
    loading: false,
    error: null
};

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_AUTH_TOKEN:
            return { ...state, authToken: action.authToken };
        case CLEAR_AUTH:
            return {
                ...state,
                authToken: null,
                currentUserId: null
            };
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUserId: action.currentUserId
            };
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case DECODE_TOKEN:
            const decodedToken = jwtDecode(action.token);
            return {
                ...state,
                currentUserId: decodedToken.user.id
            };
        default: return state;
    }
}

// actions
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const authSuccess = currentUserId => ({
    type: AUTH_SUCCESS,
    currentUserId
});

export const authError = error => ({
    type: AUTH_ERROR,
    error
});
export const decodeToken = token => ({
    type: DECODE_TOKEN,
    token
});


// thunks

export const logout = () => (dispatch) => {
    clearAuthToken();
    return dispatch(clearAuth());
}


// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
export const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user.id));
    saveAuthToken(authToken);
};

export const login = (email, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const { code } = err;
                const message =
                    code === 401
                        ? 'Incorrect email or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken();
        });
};