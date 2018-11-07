//action tests
import {
    SET_AUTH_TOKEN,
    setAuthToken,
    CLEAR_AUTH,
    clearAuth,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError,
    DECODE_TOKEN,
    decodeToken,
} from './auth';

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken = true;
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});
describe('clearAuth', () => {
    it('Should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
});
describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});
describe('authSuccess', () => {
    it('Should return the action', () => {
        const currentUserId = 'test';
        const action = authSuccess(currentUserId);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUserId).toEqual(currentUserId);
    });
});
describe('authError', () => {
    it('Should return the action', () => {
        const error = 'test';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);

    });
});
describe('decodeToken', () => {
    it('Should return the action', () => {
        const token = 'test';
        const action = decodeToken(token);
        expect(action.type).toEqual(DECODE_TOKEN);
        expect(action.token).toEqual(token);
    });
})

// reducer tests
import reducer from './auth';

const defaultState = {
    authToken: "{}",
    currentUserId: null,
    loading: false,
    error: null
};

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

    describe('setAuthToken', () => {
        it('Should set auth token', () => {
            const authToken = '123'
            let state;
            state = reducer(state, setAuthToken(authToken));
            expect(state).toEqual({
                ...defaultState,
                authToken
            });
        });
    });

    describe('clearAuth', () => {
        it('Should clear auth token', () => {
            let state;
            state = reducer(state, clearAuth());
            expect(state).toEqual({
                ...defaultState,
                authToken: null,
                currentUserId: null
            });
        });
    });

    describe('authRequest', () => {
        it('Should request auth', () => {
            let state;
            state = reducer(state, authRequest());
            expect(state).toEqual({
                ...defaultState,
                loading: true,
                error: null
            });
        });
    });

    describe('authSuccess', () => {
        it('Should set current user id', () => {
            const currentUserId = '123';
            let state;
            state = reducer(state, authSuccess(currentUserId));
            expect(state).toEqual({
                ...defaultState,
                currentUserId,
                loading: false,
            });
        });
    });

    describe('authError', () => {
        it('Should set error', () => {
            let state;
            state = reducer(state, authError(true));
            expect(state).toEqual({
                ...defaultState,
                error: true
            });
        });
    });
});