import { SubmissionError } from 'redux-form';
import { authorizedRequest } from './index'
import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from '../utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const getUser = (authToken) => {
    const url = `${API_BASE_URL}/users`;
    return authorizedRequest(url, 'GET', undefined, authToken)
}

export const updateUser = (userData, authToken) => {
    const url = `${API_BASE_URL}/users`;
    return authorizedRequest(url, 'PUT', userData, authToken)
}