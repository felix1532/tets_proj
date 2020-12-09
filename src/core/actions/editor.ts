import { createAction } from 'redux-actions';
export enum EditorActionsType {
  START_UPLOAD_IMG_EDITOR = '[EDITOR] START_UPLOAD_IMG_EDITOR',
  SUCCESS_UPLOAD_IMG_EDITOR = '[EDITOR] SUCCESS_UPLOAD_IMG_EDITOR',
  ERROR_UPLOAD_IMG_EDITOR = '[EDITOR] ERROR_UPLOAD_IMG_EDITOR',
}

export const startUploadImgEditor = createAction(
  EditorActionsType.START_UPLOAD_IMG_EDITOR
);
export const successUploadImgEditor = createAction(
  EditorActionsType.SUCCESS_UPLOAD_IMG_EDITOR
);
export const errorUploadImgEditor = createAction(
  EditorActionsType.ERROR_UPLOAD_IMG_EDITOR,
  (payload: { error: string }) => payload
);
