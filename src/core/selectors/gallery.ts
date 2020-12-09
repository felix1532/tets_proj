import { AppStates } from '../reducers/index';
import { createSelector } from 'reselect';
import { State } from '../reducers/gallery';

const galleryState = (state: AppStates): State => state.gallery;

export const selectGalleryState = createSelector(
  galleryState,
  (state) => state
);
