import { call, put, takeLatest } from 'redux-saga/effects';
import * as ProfileActions from '../../actions/profile';
import * as ProfileServices from '../../services/profile';

export function* downloadPhotoProfileSaga(): Generator {
  yield takeLatest(
    ProfileActions.requestDownloadPhotoAction,
    downloadPhotoProfileWorker
  );
}

export function* downloadPhotoProfileWorker(): Generator {
  try {
    const url = yield call(ProfileServices.downloadPhotoProfile);
    if (url) {
      yield put(ProfileActions.successDownloadPhotoProfile(url as string));
    } else {
      yield put(ProfileActions.errorDownloadPhotoProfile());
    }
  } catch (error) {
    yield put(ProfileActions.errorDownloadPhotoProfile());
  }
}
