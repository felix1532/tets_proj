import { createAction } from 'redux-actions';
import * as H from 'history';
import { AlertManager } from 'react-alert';

export enum ProfileActionsType {
  LOAD_PROFILE_REQUEST = '[PROFILE] LOAD_PROFILE_REQUEST',
  SUCCESS_LOAD_PROFILE = '[PROFILE] SUCCESS_LOAD_PROFILE',
  ERROR_LOAD_PROFILE = '[PROFILE] ERROR_LOAD_PROFILE',

  REQUEST_UPLOAD_PHOTO_PROFILE = '[PROFILE] REQUEST_UPLOAD_PHOTO_PROFILE',
  SUCCESS_UPLOAD_PHOTO_PROFILE = '[PROFILE] SUCCESS_UPLOAD_PHOTO_PROFILE',
  ERROR_UPLOAD_PHOTO_PROFILE = 'ERROR_UPLOAD_PHOTO_PROFILE',

  REQUEST_DOWNLOAD_PHOTO_PROFILE = '[PROFILE] REQUEST_DOWNLOAD_PHOTO_PROFILE',
  SUCCESS_DOWNLOAD_PHOTO_PROFILE = '[PROFILE] SUCCESS_DOWNLOAD_PHOTO_PROFILE',
  ERROR_DOWNLOAD_PHOTO_PROFILE = '[PROFILE] ERROR_DOWNLOAD_PHOTO_PROFILE',

  REQUEST_UPDATE_NAME_PROFILE = '[PROFILE] REQUEST_UPDATE_NAME_PROFILE',
  SUCCESS_UPDATE_NAME_PROFILE = '[PROFILE] SUCCESS_UPDATE_NAME_PROFILE',
  ERROR_UPDATE_NAME_PROFILE = '[PROFILE] ERROR_UPDATE_NAME_PROFILE',

  REQUEST_UPDATE_SURNAME_PROFILE = '[PROFILE] REQUEST_UPDATE_SURNAME_PROFILE',
  SUCCESS_UPDATE_SURNAME_PROFILE = '[PROFILE] SUCCESS_UPDATE_SURNAME_PROFILE',
  ERROR_UPDATE_SURNAME_PROFILE = '[PROFILE] ERROR_UPDATE_SURNAME_PROFILE',
}

export const profileLoadRequestAction = createAction(
  ProfileActionsType.LOAD_PROFILE_REQUEST
);
export const successProfileLoadAction = createAction(
  ProfileActionsType.SUCCESS_LOAD_PROFILE,
  (payload: firebase.default.firestore.DocumentData) => payload
);
export const errorProfileLoadAction = createAction(
  ProfileActionsType.ERROR_LOAD_PROFILE,
  (payload: { error: string }) => payload
);

export const requestUploadPhotoAction = createAction<{
  image: string;
  history: H.History;
  alert: AlertManager;
}>(ProfileActionsType.REQUEST_UPLOAD_PHOTO_PROFILE);
export const successUploadPhotoProfile = createAction(
  ProfileActionsType.SUCCESS_UPLOAD_PHOTO_PROFILE
);
export const errorUploadPhotoProfile = createAction(
  ProfileActionsType.ERROR_UPLOAD_PHOTO_PROFILE
);

export const requestDownloadPhotoAction = createAction(
  ProfileActionsType.REQUEST_DOWNLOAD_PHOTO_PROFILE
);
export const successDownloadPhotoProfile = createAction(
  ProfileActionsType.SUCCESS_DOWNLOAD_PHOTO_PROFILE,
  (payload: string) => payload
);
export const errorDownloadPhotoProfile = createAction(
  ProfileActionsType.ERROR_DOWNLOAD_PHOTO_PROFILE
);

export const requestUpdateNameProfile = createAction<{
  name: string;
  history: H.History;
  alert: AlertManager;
}>(ProfileActionsType.REQUEST_UPDATE_NAME_PROFILE);
export const successUpdateNameProfile = createAction(
  ProfileActionsType.SUCCESS_UPDATE_NAME_PROFILE
);
export const errorUpdateNameProfile = createAction(
  ProfileActionsType.ERROR_UPDATE_NAME_PROFILE
);

export const requestUpdateSurnameProfile = createAction<{
  surname: string;
  history: H.History;
  alert: AlertManager;
}>(ProfileActionsType.REQUEST_UPDATE_SURNAME_PROFILE);
export const successUpdateSurnameProfile = createAction(
  ProfileActionsType.SUCCESS_UPDATE_SURNAME_PROFILE
);
export const errorUpdateSurnameProfile = createAction(
  ProfileActionsType.ERROR_UPDATE_SURNAME_PROFILE
);
