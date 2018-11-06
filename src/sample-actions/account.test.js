import {
    ACCOUNT_LOADING,
    setLoading,
    ACCOUNT_ERROR,
    setError,
    ACCOUNT_ADD,
    addUser,
    ACCOUNT_UPDATE,
    updateUserInfo,
} from './account';

describe('setLoading', () => {
    it('Should return the action', () => {
        const loading = true;
        const action = setLoading(loading);
        expect(action.type).toEqual(ACCOUNT_LOADING);
        expect(action.loading).toEqual(loading);
    });
});
describe('setError', () => {
    it('Should return the action', () => {
        const error = 'test';
        const action = setError(error);
        expect(action.type).toEqual(ACCOUNT_ERROR);
        expect(action.error).toEqual(error);
    });
});
describe('addUser', () => {
    it('Should return the action', () => {
        const user = 'test';
        const action = addUser(user);
        expect(action.type).toEqual(ACCOUNT_ADD);
        expect(action.user).toEqual(user);
    });
});
describe('updateUserInfo', () => {
    it('Should return the action', () => {
        const user = 'test';
        const action = updateUserInfo(user);
        expect(action.type).toEqual(ACCOUNT_UPDATE);
        expect(action.user).toEqual(user);
    });
});