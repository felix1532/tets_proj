import { fork } from 'redux-saga/effects';
import { deletePhotoGallerySaga } from './delete-photo';
import { downloadGalleryImage } from './download-gallery-image';

export function* gallerySaga(): Generator {
  yield fork(deletePhotoGallerySaga);
  yield fork(downloadGalleryImage);
}
