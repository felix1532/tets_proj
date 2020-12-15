import * as GalleryActions from '../../actions/gallery';

import { call, put, takeEvery } from 'redux-saga/effects';
import { deletePhotoGallery } from '../../services/gallery';

export function* deletePhotoGallerySaga(): Generator {
  yield takeEvery(
    GalleryActions.requestDeletePhotoGallery,
    deletePhotoGalleryWorker
  );
}

function* deletePhotoGalleryWorker({
  payload,
}: ReturnType<typeof GalleryActions.requestDeletePhotoGallery>) {
  try {
    yield call(deletePhotoGallery, payload.fullPath);
    yield put(GalleryActions.successDeletePhotoGallery());
    yield put(GalleryActions.deleteElementById(payload.fullPath));
    payload.alert.success('Photo deleted!');
  } catch (e) {
    yield put(GalleryActions.errorDeletePhotoGallery({ error: e.message }));
    payload.alert.success('Error deleted photo!');
  }
}
