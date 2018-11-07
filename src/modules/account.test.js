//action tests
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

// reducer tests
import reducer from './account';

const defaultState = {
    user: {
        userName: '',
        email: '',
        avatarUrl: '',
        collections: [],
        models: [],
    }
}

describe('reducer', () => {
 
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(defaultState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('setLoading', () => {
        it('Should set loading', () => {
            let state;
            state = reducer(state, setLoading(true));
            expect(state).toEqual({
                ...defaultState,
                loading: true
            });
        });
    });

    describe('setError', () => {
        it('Should set error', () => {
            let state;
            state = reducer(state, setError(true));
            expect(state).toEqual({
                ...defaultState,
                error: true
            });
        });
    });

    describe('addUser', () => {
        it('Should add user', () => {
            const user = {
                user: {
                    userName: 'test',
                    email: 'test@test',
                    avatarUrl: 'url',
                    collections: [1,2],
                    models: [1,2],
                }
            }
            let state;
            state = reducer(state, addUser(user));
            expect(state).toEqual({
                ...defaultState,
                user: user
            });
        });
    });

    describe('updateUserInfo', () => {
        it('Should update user', () => {
            const userData = {
                    userName: 'test2',
            }
            let state;
            state = reducer(state, updateUserInfo(userData));
            expect(state).toEqual({
                ...defaultState,
                user: {
                    userName: 'test2'
                }
            });
        });
    });  
});