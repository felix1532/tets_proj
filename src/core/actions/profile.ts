import { createAction } from 'redux-actions';

export enum ProfileActionsType {
  START_LOAD_PROFILE = '[PROFILE] START_LOAD_PROFILE',
  SUCCESS_LOAD_PROFILE = '[PROFILE] SUCCESS_LOAD_PROFILE',
  ERROR_LOAD_PROFILE = '[PROFILE] ERROR_LOAD_PROFILE',

  START_UPLOAD_PHOTO_PROFILE = '[PROFILE] START_UPLOAD_PHOTO_PROFILE',
  SUCCESS_UPLOAD_PHOTO_PROFILE = '[PROFILE] SUCCESS_UPLOAD_PHOTO_PROFILE',
  ERROR_UPLOAD_PHOTO_PROFILE = 'ERROR_UPLOAD_PHOTO_PROFILE',

  START_DOWNLOAD_PHOTO_PROFILE = '[PROFILE] START_DOWNLOAD_PHOTO_PROFILE',
  SUCCESS_DOWNLOAD_PHOTO_PROFILE = '[PROFILE] SUCCESS_DOWNLOAD_PHOTO_PROFILE',
  ERROR_DOWNLOAD_PHOTO_PROFILE = '[PROFILE] ERROR_DOWNLOAD_PHOTO_PROFILE',

  START_UPDATE_NAME_PROFILE = '[PROFILE] START_UPDATE_NAME_PROFILE',
  SUCCESS_UPDATE_NAME_PROFILE = '[PROFILE] SUCCESS_UPDATE_NAME_PROFILE',
  ERROR_UPDATE_NAME_PROFILE = '[PROFILE] ERROR_UPDATE_NAME_PROFILE',

  START_UPDATE_SURNAME_PROFILE = '[PROFILE] START_UPDATE_SURNAME_PROFILE',
  SUCCESS_UPDATE_SURNAME_PROFILE = '[PROFILE] SUCCESS_UPDATE_SURNAME_PROFILE',
  ERROR_UPDATE_SURNAME_PROFILE = '[PROFILE] ERROR_UPDATE_SURNAME_PROFILE',
}

export const startProfileLoadAction = createAction(
  ProfileActionsType.START_LOAD_PROFILE
);
export const successProfileLoadAction = createAction(
  ProfileActionsType.SUCCESS_LOAD_PROFILE,
  (payload: firebase.default.firestore.DocumentData | undefined) => payload
);
export const errorProfileLoadAction = createAction(
  ProfileActionsType.ERROR_LOAD_PROFILE,
  (payload: { error: string }) => payload
);

export const startUploadPhotoAction = createAction(
  ProfileActionsType.START_UPLOAD_PHOTO_PROFILE
);
export const successUploadPhotoProfile = createAction(
  ProfileActionsType.SUCCESS_UPLOAD_PHOTO_PROFILE
);
export const errorUploadPhotoProfile = createAction(
  ProfileActionsType.ERROR_UPLOAD_PHOTO_PROFILE
);

export const startDownloadPhotoAction = createAction(
  ProfileActionsType.START_DOWNLOAD_PHOTO_PROFILE
);
export const successDownloadPhotoProfile = createAction(
  ProfileActionsType.SUCCESS_DOWNLOAD_PHOTO_PROFILE,
  (payload: { url: string }) => payload
);
export const errorDownloadPhotoProfile = createAction(
  ProfileActionsType.ERROR_DOWNLOAD_PHOTO_PROFILE
);

export const startUpdateNameProfile = createAction(
  ProfileActionsType.START_UPDATE_NAME_PROFILE
);
export const successUpdateNameProfile = createAction(
  ProfileActionsType.SUCCESS_UPDATE_NAME_PROFILE
);
export const errorUpdateNameProfile = createAction(
  ProfileActionsType.ERROR_UPDATE_NAME_PROFILE
);

export const startUpdateSurnameProfile = createAction(
  ProfileActionsType.START_UPDATE_SURNAME_PROFILE
);
export const successUpdateSurnameProfile = createAction(
  ProfileActionsType.SUCCESS_UPDATE_SURNAME_PROFILE
);
export const errorUpdateSurnameProfile = createAction(
  ProfileActionsType.ERROR_UPDATE_SURNAME_PROFILE
);
