import { AppStates } from './../reducers/index';
import { createSelector } from 'reselect';
import { State } from '../reducers/authentication';

const authState = (state: AppStates): State => state.signIn;

export const selectAuthState = createSelector(authState, (state) => state);
