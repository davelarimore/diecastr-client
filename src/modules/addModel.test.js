//action tests
import {
    ADD_MODEL_LOADING,
    setLoading,
    ADD_MODEL_ERROR,
    setError,
    ADD_MODEL_SAVE,
    saveModel,
    UNSET_NEW,
    unsetNew,
} from './addModel';

describe('setLoading', () => {
    it('Should return the action', () => {
        const loading = true;
        const action = setLoading(loading);
        expect(action.type).toEqual(ADD_MODEL_LOADING);
        expect(action.loading).toEqual(loading);
    });
});
describe('setError', () => {
    it('Should return the action', () => {
        const error = 'test';
        const action = setError(error);
        expect(action.type).toEqual(ADD_MODEL_ERROR);
        expect(action.error).toEqual(error);
    });
});
describe('saveModel', () => {
    it('Should return the action', () => {
        const id = 'test';
        const action = saveModel(id);
        expect(action.type).toEqual(ADD_MODEL_SAVE);
        expect(action.id).toEqual(id);
    });
});
describe('unsetNew', () => {
    it('Should return the action', () => {
        const action = unsetNew();
        expect(action.type).toEqual(UNSET_NEW);
    });
});


// reducer tests
import reducer from './addModel';

const defaultState = {
    id: null,
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

    describe('saveModel', () => {
        it('Should save model', () => {
            const id = '123';
            let state;
            state = reducer(state, saveModel(id));
            expect(state).toEqual({
                ...defaultState,
                id
            });
        });
    });

    describe('unsetNew', () => {
        it('Should unset new flag', () => {
            let state;
            state = reducer(state, unsetNew());
            expect(state).toEqual({
                ...defaultState,
                id: null
            });
        });
    });
});