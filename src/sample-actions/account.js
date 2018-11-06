// constants
export const ACCOUNT_LOADING = 'ACCOUNT_LOADING';
export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';
export const ACCOUNT_ADD = 'ACCOUNT_ADD';
export const ACCOUNT_UPDATE = 'ACCOUNT_UPDATE';


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