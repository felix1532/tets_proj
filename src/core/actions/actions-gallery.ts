import { createAction } from 'redux-actions';
export enum GalleryActionsType {
  START_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] START_DOWNLOAD_PHOTO_GALLERY',
  SUCCESS_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] SUCCESS_DOWNLOAD_PHOTO_GALLERY',
  ERROR_DOWNLOAD_PHOTO_GALLERY = '[GALLERY] ERROR_DOWNLOAD_PHOTO_GALLERY',
}

export const startDownloadPhotoGallery = createAction(
  GalleryActionsType.START_DOWNLOAD_PHOTO_GALLERY
);
export const successDownloadPhotoGallery = createAction(
  GalleryActionsType.SUCCESS_DOWNLOAD_PHOTO_GALLERY,
  (payload: string[]) => payload
);
export const errorDownloadPhotoGallery = createAction(
  GalleryActionsType.ERROR_DOWNLOAD_PHOTO_GALLERY,
  (payload: { error: string }) => payload
);
