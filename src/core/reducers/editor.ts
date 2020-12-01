import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { EditorActionsType } from '../actions/actions-editor';

export interface State {
  isLoading: boolean;
  errorUpload: string;
}

const initialState = {
  isLoading: false,
  errorUpload: '',
};

export const reducer = handleActions<State>(
  {
    [EditorActionsType.START_UPLOAD_IMG_EDITOR]: (state: State) => ({
      ...state,
      isLoading: true,
    }),
    [EditorActionsType.SUCCESS_UPLOAD_IMG_EDITOR]: (state: State) => ({
      ...state,
      isLoading: false,
      errorUpload: '',
    }),
    [EditorActionsType.START_UPLOAD_IMG_EDITOR]: (
      state: State,
      action: AnyAction
    ) => ({
      ...state,
      isLoading: false,
      errorUpload: action.payload,
    }),
  },
  initialState
);
