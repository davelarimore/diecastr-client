import { API_BASE_URL } from '../../config';
import { authorizedRequest } from './index';

export const getModelDetail = (authToken, id) => {
    const path = authToken ? `${API_BASE_URL}/models/${id}` : `${API_BASE_URL}/public/models/${id}`
    return fetch(path, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}` || null
        },
    }).then(res => {
        return res.json()
    }
    )
}

export const createNewModel = (modelData) => {
    const url = `${API_BASE_URL}/models`;
    return authorizedRequest(url, 'POST', modelData)
}

export const updateModelData = (modelData) => {
    const url = `${API_BASE_URL}/models/${modelData._id}`;
    return authorizedRequest(url, 'PUT', modelData)
}

export const deleteModel = (modelId) => {
    const url = `${API_BASE_URL}/models/${modelId}`;
    return authorizedRequest(url, 'DELETE')
}