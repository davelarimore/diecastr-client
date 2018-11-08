// action tests
import {
    HOME_LOADING,
    setLoading,
    HOME_ERROR,
    setError,
    HOME_ADD,
    addCollections
} from './home';

describe('setLoading', () => {
    it('Should return the action', () => {
        const loading = true;
        const action = setLoading(loading);
        expect(action.type).toEqual(HOME_LOADING);
        expect(action.loading).toEqual(loading);
    });
});
describe('setError', () => {
    it('Should return the action', () => {
        const error = 'test';
        const action = setError(error);
        expect(action.type).toEqual(HOME_ERROR);
        expect(action.error).toEqual(error);
    });
});
describe('addCollections', () => {
    it('Should return the action', () => {
        const collections = 'test';
        const action = addCollections(collections);
        expect(action.type).toEqual(HOME_ADD);
        expect(action.collections).toEqual(collections);
    });
});

// reducer tests
import reducer from './home';

const defaultState = {
    collections: [
        {
            userId: '',
        }
    ],
    loading: true,
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

    describe('addCollections', () => {
        it('Should add collections', () => {
            const collections = 'test';
            let state;
            state = reducer(state, addCollections(collections));
            expect(state).toEqual({
                ...defaultState,
                collections
            });
        });
    });
});