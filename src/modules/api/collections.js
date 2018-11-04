import { API_BASE_URL } from '../../config';
import { authorizedRequest } from './index'

export const getCollectionModels = (pageNo, pageSize) => {
    const url = `${API_BASE_URL}/collections/models?pageNo=${pageNo}&size=${pageSize}`;
    return authorizedRequest(url, 'GET')
}

export const updateMyCollection = (collectionData) => {
    const url = `${API_BASE_URL}/collections/${collectionData.id}`;
    return authorizedRequest(url, 'PUT', collectionData)
}

export const getPublicCollectionModels = (id, pageNo, pageSize) => {
    return fetch(`${API_BASE_URL}/public/collections/models?id=${id}&pageNo=${pageNo}&size=${pageSize}`, {
        method: 'GET',
    })
        .then(res => res.json())
}

export const getCommunityCollections = () => {
    return fetch(`${API_BASE_URL}/public/collections/`, {
        method: 'GET',
    })
        .then(res => res.json())
}