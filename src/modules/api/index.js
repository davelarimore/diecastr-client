// API helper
export const authorizedRequest = (url, method, data = undefined, authToken = undefined) => {
    let headers;
    if (authToken) {
        headers = {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json",
        }
    }
    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.status !== 204) {
            return res.json()
        }
    })
}