import { create } from 'domain';
import { createAction } from 'redux-actions';
import { ProfileActionsType } from './types-actions/profile-types';

export const startProfileLoadAction = createAction(ProfileActionsType.START_LOAD_PROFILE)
export const successProfileLoadAction = createAction(ProfileActionsType.SUCCESS_LOAD_PROFILE, (payload: firebase.default.firestore.DocumentData | undefined) => payload)
export const errorProfileLoadAction = createAction(ProfileActionsType.ERROR_LOAD_PROFILE, (payload: { error: string }) => payload)

export const startUploadPhotoAction = createAction(ProfileActionsType.START_UPLOAD_PHOTO_PROFILE)
export const successUploadPhotoProfile = createAction(ProfileActionsType.SUCCESS_UPLOAD_PHOTO_PROFILE)
export const errorUploadPhotoProfile = createAction(ProfileActionsType.ERROR_UPLOAD_PHOTO_PROFILE)

export const startDownloadPhotoAction = createAction(ProfileActionsType.START_DOWNLOAD_PHOTO_PROFILE)
export const successDownloadPhotoProfile = createAction(ProfileActionsType.SUCCESS_DOWNLOAD_PHOTO_PROFILE, (payload: {url:string})=> payload)
export const errorDownloadPhotoProfile = createAction(ProfileActionsType.ERROR_DOWNLOAD_PHOTO_PROFILE, (payload: { url: '' }) => payload)

export const startUpdateNameProfile = createAction(ProfileActionsType.START_UPDATE_NAME_PROFILE)
export const successUpdateNameProfile = createAction(ProfileActionsType.SUCCESS_UPDATE_NAME_PROFILE)
export const errorUpdateNameProfile = createAction(ProfileActionsType.ERROR_UPDATE_NAME_PROFILE)

export const startUpdateSurnameProfile = createAction(ProfileActionsType.START_UPDATE_SURNAME_PROFILE)
export const successUpdateSurnameProfile = createAction(ProfileActionsType.SUCCESS_UPDATE_SURNAME_PROFILE)
export const errorUpdateSurnameProfile = createAction(ProfileActionsType.ERROR_UPDATE_SURNAME_PROFILE)