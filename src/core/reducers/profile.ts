import { User } from './../interfaces/user';
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { ProfileActionsType } from '../actions/actions-profile';

export interface State {
  uploaded: boolean;
  isLoading: boolean;
  avatarUrl: string;
  errorAvatar: string;
  errorProfile: string;
  user: User;
}

const initialState = {
  uploaded: false,
  isLoading: false,
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
      isLoading: true,
    }),
    [ProfileActionsType.SUCCESS_LOAD_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      user: action.payload,
      isLoading: false,
      errorProfile: '',
    }),
    [ProfileActionsType.ERROR_LOAD_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      isLoading: false,
      errorProfile: action.payload,
    }),
    [ProfileActionsType.START_DOWNLOAD_PHOTO_PROFILE]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [ProfileActionsType.SUCCESS_DOWNLOAD_PHOTO_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      avatarUrl: action.payload,
      errorAvatar: '',
      isLoading: false,
    }),
    [ProfileActionsType.START_DOWNLOAD_PHOTO_PROFILE]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      errorAvatar: action.payload,
      isLoading: false,
    }),
  },
  initialState
);
