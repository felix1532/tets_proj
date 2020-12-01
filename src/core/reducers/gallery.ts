import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { GalleryActionsType } from '../actions/actions-gallery';

export interface State {
  gallery: Array<string>;
  isLoading: boolean;
}

const initialState = {
  gallery: [''],
  isLoading: false,
};

export const reducer = handleActions<State>(
  {
    [GalleryActionsType.START_DOWNLOAD_PHOTO_GALLERY]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [GalleryActionsType.SUCCESS_DOWNLOAD_PHOTO_GALLERY]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      gallery: [...action.payload],
      isLoading: false,
    }),
    [GalleryActionsType.ERROR_DOWNLOAD_PHOTO_GALLERY]: (state: State) => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState
);
