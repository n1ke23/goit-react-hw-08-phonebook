import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionsAuth from './actionsAuth';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [actionsAuth.registerSuccess]: (_, { payload }) => payload.user,
    [actionsAuth.loginSuccess]: (_, { payload }) => payload.user,
    [actionsAuth.getCurrentUserSuccess]: (_, { payload }) => payload,
    [actionsAuth.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
    [actionsAuth.registerSuccess]: (_, { payload }) => payload.token,
    [actionsAuth.loginSuccess]: (_, { payload }) => payload.token,
    [actionsAuth.logoutSuccess]: () => null,
    [actionsAuth.logoutError]: () => null,
});

const error = createReducer(null, {
    [actionsAuth.registerError]: (_, { payload }) => payload,
    [actionsAuth.loginError]: (_, { payload }) => payload,
    [actionsAuth.logoutError]: (_, { payload }) => payload,
    [actionsAuth.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    token,
    error,
});