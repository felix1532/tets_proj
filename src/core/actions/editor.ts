import { AlertManager } from 'react-alert';
import { createAction } from 'redux-actions';
export enum EditorActionsType {
  REQUEST_UPLOAD_IMG_EDITOR = '[EDITOR] REQUEST_UPLOAD_IMG_EDITOR',
  SUCCESS_UPLOAD_IMG_EDITOR = '[EDITOR] SUCCESS_UPLOAD_IMG_EDITOR',
  ERROR_UPLOAD_IMG_EDITOR = '[EDITOR] ERROR_UPLOAD_IMG_EDITOR',
}

export const requestUploadImgEditor = createAction<{
  image: string;
  alert: AlertManager;
}>(EditorActionsType.REQUEST_UPLOAD_IMG_EDITOR);
export const successUploadImgEditor = createAction(
  EditorActionsType.SUCCESS_UPLOAD_IMG_EDITOR
);
export const errorUploadImgEditor = createAction(
  EditorActionsType.ERROR_UPLOAD_IMG_EDITOR,
  (payload: { error: string }) => payload
);
