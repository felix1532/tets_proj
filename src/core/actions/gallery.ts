import { ListPhotos } from '../interfaces/list-photos';
import { createAction } from 'redux-actions';
export enum GalleryActionsType {
  START_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] START_DOWNLOAD_PHOTO_GALLERY',
  SUCCESS_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] SUCCESS_DOWNLOAD_PHOTO_GALLERY',
  ERROR_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] ERROR_DOWNLOAD_PHOTO_GALLERY',

  START_DELETE_PHOTO_GALLERY = '[GALLERY] START_DELETE_PHOTO_GALLERY',
  SUCCESS_DELETE_PHOTO_GALLERY = '[GALLERY] SUCCESS_DELETE_PHOTO_GALLERY',
  ERROR_DELETE_PHOTO_GALLERY = '[GALLERY] ERROR_DELETE_PHOTO_GALLERY',

  DELETE_ELEMENT_BY_ID = '[GALLERY] DELETE_ELEMENT_BY_ID',
}

export const startDownloadPhotoGallery = createAction(
  GalleryActionsType.START_DOWNLOAD_PHOTO_GALLERY
);
export const successDownloadPhotoGallery = createAction(
  GalleryActionsType.SUCCESS_DOWNLOAD_PHOTO_GALLERY,
  (payload: Array<ListPhotos>) => payload
);
export const errorDownloadPhotoGallery = createAction(
  GalleryActionsType.ERROR_DOWNLOAD_PHOTO_GALLERY,
  (payload: { error: string }) => payload
);

export const startDeletePhotoGallery = createAction(
  GalleryActionsType.START_DELETE_PHOTO_GALLERY
);
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
