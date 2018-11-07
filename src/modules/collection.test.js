//action tests
import {
    SET_FILTER,
    setFilter,
    SET_PAGE,
    setPage,
    COLLECTION_LOADING,
    setLoading,
    COLLECTION_ERROR,
    setError,
    SET_COLLECTION_ATTRIBUTE,
    setCollectionAttribute,
} from './collection';

describe('setLoading', () => {
    it('Should return the action', () => {
        const loading = true;
        const action = setLoading(loading);
        expect(action.type).toEqual(COLLECTION_LOADING);
        expect(action.loading).toEqual(loading);
    });
});
describe('setError', () => {
    it('Should return the action', () => {
        const error = 'test';
        const action = setError(error);
        expect(action.type).toEqual(COLLECTION_ERROR);
        expect(action.error).toEqual(error);
    });
});
describe('setFilter', () => {
    it('Should return the action', () => {
        const filter = 'test';
        const action = setFilter(filter);
        expect(action.type).toEqual(SET_FILTER);
        expect(action.filter).toEqual(filter);
    });
});
describe('setPage', () => {
    it('Should return the action', () => {
        const page = 'test';
        const action = setPage(page);
        expect(action.type).toEqual(SET_PAGE);
        expect(action.page).toEqual(page);
    });
});
describe('setCollectionAttribute', () => {
    it('Should return the action', () => {
        const collectionAttribute = 'test';
        const action = setCollectionAttribute(collectionAttribute);
        expect(action.type).toEqual(SET_COLLECTION_ATTRIBUTE);
        expect(action.collectionAttribute).toEqual(collectionAttribute);
    });
});

// reducer tests
import reducer from './collection';

const defaultState = {
    modelFilter: 'SHOW_ALL',
    currentPage: 1,
    pageTotal: 1,
    models: [],
    public: '',
    id: '',
    userId: ''
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

    describe('setFilter', () => {
        it('Should set filter', () => {
            const modelFilter = 'test';
            let state;
            state = reducer(state, setFilter(modelFilter));
            expect(state).toEqual({
                ...defaultState,
                modelFilter
            });
        });
    });

    describe('setPage', () => {
        it('Should set page', () => {
            const currentPage = 3;
            let state;
            state = reducer(state, setPage(currentPage));
            expect(state).toEqual({
                ...defaultState,
                currentPage
            });
        });
    });

    describe('setCollectionAttribute', () => {
        it('Should set collection attribute', () => {
            const collectionAttribute = { public: true };
            let state;
            state = reducer(state, setCollectionAttribute(collectionAttribute));
            expect(state).toEqual({
                ...defaultState,
                public: true
            });
        });
    });
});