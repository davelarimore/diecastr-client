// action tests
import {
    MODEL_LOADING,
    setLoading,
    MODEL_ERROR,
    setError,
    MODEL_ADD,
    addModel,
    MODEL_SAVE,
    saveModel,
    SET_DELETED,
    setDeleted,
    UNSET_DELETED,
    unsetDeleted
} from './modelDetail';

describe('setLoading', () => {
    it('Should return the action', () => {
        const loading = true;
        const action = setLoading(loading);
        expect(action.type).toEqual(MODEL_LOADING);
        expect(action.loading).toEqual(loading);
    });
});
describe('setError', () => {
    it('Should return the action', () => {
        const error = 'test';
        const action = setError(error);
        expect(action.type).toEqual(MODEL_ERROR);
        expect(action.error).toEqual(error);
    });
});
describe('addModel', () => {
    it('Should return the action', () => {
        const model = 'test';
        const action = addModel(model);
        expect(action.type).toEqual(MODEL_ADD);
        expect(action.model).toEqual(model);
    });
});
describe('saveModel', () => {
    it('Should return the action', () => {
        const model = 'test';
        const action = saveModel(model);
        expect(action.type).toEqual(MODEL_SAVE);
        expect(action.model).toEqual(model);
    });
});
describe('setDeleted', () => {
    it('Should return the action', () => {
        const action = setDeleted();
        expect(action.type).toEqual(SET_DELETED);
    });
});
describe('unsetDeleted', () => {
    it('Should return the action', () => {
        const action = unsetDeleted();
        expect(action.type).toEqual(UNSET_DELETED);
    });
});

// reducer tests
import reducer from './modelDetail';

const defaultState = {
    deleted: false,
    model: {},
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

    describe('addModel', () => {
        it('Should add collections', () => {
            const model = 'test';
            let state;
            state = reducer(state, addModel(model));
            expect(state).toEqual({
                ...defaultState,
                model
            });
        });
    });

    describe('saveModel', () => {
        it('Should add collections', () => {
            const model = 'test';
            let state;
            state = reducer(state, saveModel(model));
            expect(state).toEqual({
                ...defaultState,
                model
            });
        });
    });

    describe('setDeleted', () => {
        it('Should add collections', () => {
            let state;
            state = reducer(state, setDeleted());
            expect(state).toEqual({
                ...defaultState,
                deleted: true
            });
        });
    });

    describe('unsetDeleted', () => {
        it('Should add collections', () => {
            let state;
            state = reducer(state, unsetDeleted());
            expect(state).toEqual({
                ...defaultState,
                deleted: false
            });
        });
    });
});