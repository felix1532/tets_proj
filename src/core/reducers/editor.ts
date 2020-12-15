import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { EditorActionsType } from '../actions/editor';

export interface State {
  isLoading: boolean;
  errorUpload: string;
}

const initialState = {
  isLoading: true,
  errorUpload: '',
};

export const reducer = handleActions<State>(
  {
    [EditorActionsType.REQUEST_UPLOAD_IMG_EDITOR]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [EditorActionsType.SUCCESS_UPLOAD_IMG_EDITOR]: (state: State) => ({
      ...state,
      isLoading: false,
      errorUpload: '',
    }),
    [EditorActionsType.ERROR_UPLOAD_IMG_EDITOR]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      isLoading: true,
      errorUpload: action.payload,
    }),
  },
  initialState
);
