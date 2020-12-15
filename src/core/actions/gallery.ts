import { ListGallery } from '../interfaces/list-gallery';
import { createAction } from 'redux-actions';
import { AlertManager } from 'react-alert';
export enum GalleryActionsType {
  REQUEST_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] REQUEST_DOWNLOAD_PHOTO_GALLERY',
  SUCCESS_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] SUCCESS_DOWNLOAD_PHOTO_GALLERY',
  ERROR_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] ERROR_DOWNLOAD_PHOTO_GALLERY',

  REQUEST_DELETE_PHOTO_GALLERY = '[GALLERY] REQUEST_DELETE_PHOTO_GALLERY',
  SUCCESS_DELETE_PHOTO_GALLERY = '[GALLERY] SUCCESS_DELETE_PHOTO_GALLERY',
  ERROR_DELETE_PHOTO_GALLERY = '[GALLERY] ERROR_DELETE_PHOTO_GALLERY',

  DELETE_ELEMENT_BY_ID = '[GALLERY] DELETE_ELEMENT_BY_ID',
}

export const requestDownloadPhotoGallery = createAction(
  GalleryActionsType.REQUEST_DOWNLOAD_PHOTO_GALLERY
);
export const successDownloadPhotoGallery = createAction(
  GalleryActionsType.SUCCESS_DOWNLOAD_PHOTO_GALLERY,
  (payload: Array<ListGallery>) => payload
);
export const errorDownloadPhotoGallery = createAction(
  GalleryActionsType.ERROR_DOWNLOAD_PHOTO_GALLERY,
  (payload: { error: string }) => payload
);

export const requestDeletePhotoGallery = createAction<{
  fullPath: string;
  alert: AlertManager;
}>(GalleryActionsType.REQUEST_DELETE_PHOTO_GALLERY);
export const successDeletePhotoGallery = createAction(
  GalleryActionsType.SUCCESS_DELETE_PHOTO_GALLERY
);
export const errorDeletePhotoGallery = createAction(
  GalleryActionsType.ERROR_DELETE_PHOTO_GALLERY,
  (payload: { error: string }) => payload
);

export const deleteElementById = createAction(
  GalleryActionsType.DELETE_ELEMENT_BY_ID,
  (payload: string) => payload
);
