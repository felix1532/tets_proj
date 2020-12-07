import { User } from './../interfaces/user';
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { ProfileActionsType } from '../actions/actions-profile';

export interface State {
  uploaded: boolean;
  fieldsLoading: boolean;
  photoLoading: boolean;
  avatarUrl: string;
  errorAvatar: string;
  errorProfile: string;
  user: User;
}

const initialState = {
  uploaded: false,
  fieldsLoading: true,
  photoLoading: true,
  avatarUrl: '',
  errorAvatar: '',
  errorProfile: '',
  user: {
    name: '',
    surname: '',
    email: '',
  },
};

export const reducer = handleActions<State>(
  {
    [ProfileActionsType.START_LOAD_PROFILE]: (state: State) => ({
      ...state,
      fieldsLoading: true,
    }),
    [ProfileActionsType.SUCCESS_LOAD_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      user: action.payload,
      fieldsLoading: false,
      errorProfile: '',
    }),
    [ProfileActionsType.ERROR_LOAD_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      fieldsLoading: false,
      errorProfile: action.payload,
    }),
    [ProfileActionsType.START_DOWNLOAD_PHOTO_PROFILE]: (state: State) => ({
      ...state,
      photoLoading: true,
    }),
    [ProfileActionsType.SUCCESS_DOWNLOAD_PHOTO_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      avatarUrl: action.payload,
      errorAvatar: '',
      photoLoading: false,
    }),
    [ProfileActionsType.ERROR_DOWNLOAD_PHOTO_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      errorAvatar: action.payload,
      photoLoading: false,
    }),
  },
  initialState
);
