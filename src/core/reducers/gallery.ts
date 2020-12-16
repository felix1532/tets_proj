import { ListGallery } from '../interfaces/list-gallery';
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { GalleryActionsType } from '../actions/gallery';

export interface State {
  gallery: Array<ListGallery>;
  isLoading: boolean;
  error: string;
}

const initialState = {
  gallery: [{ photo: '', fullPath: '', timeCreated: '', name: '' }],
  isLoading: true,
  error: '',
};

export const reducer = handleActions<State>(
  {
    [GalleryActionsType.REQUEST_DOWNLOAD_PHOTO_GALLERY]: (state: State) => ({
      ...state,
      isLoading: true,
      error: '',
    }),
    [GalleryActionsType.SUCCESS_DOWNLOAD_PHOTO_GALLERY]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      gallery: action.payload,
      isLoading: false,
    }),
    [GalleryActionsType.ERROR_DOWNLOAD_PHOTO_GALLERY]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
    [GalleryActionsType.REQUEST_DELETE_PHOTO_GALLERY]: (state: State) => ({
      ...state,
      error: '',
      isLoading: true,
    }),
    [GalleryActionsType.SUCCESS_DELETE_PHOTO_GALLERY]: (state: State) => ({
      ...state,
      error: '',
      isLoading: false,
    }),
    [GalleryActionsType.ERROR_DELETE_PHOTO_GALLERY]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
    [GalleryActionsType.DELETE_ELEMENT_BY_ID]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      gallery: state.gallery.filter(
        (value) => value.fullPath !== action.payload
      ),
    }),
  },
  initialState
);
