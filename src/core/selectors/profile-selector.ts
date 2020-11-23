import { AppStates } from './../reducers/index';
import { createSelector } from 'reselect';
import { State } from '../reducers/profile';

const profileState = (state: AppStates): State => state.profile;

export const selectProfileState = createSelector(
  profileState,
  (state) => state
);
