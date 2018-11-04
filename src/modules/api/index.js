import {store} from '../../store'

// API helper
export const authorizedRequest = (url, method, data = undefined, headers = {}) => {
    const authToken = store.getState().auth.authToken;
    return fetch(url, {
        method,
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json",
            ...headers
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.status !== 204) {
            return res.json()
        }
    })
}