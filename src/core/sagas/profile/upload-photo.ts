import { call, put, takeEvery } from 'redux-saga/effects';
import * as ProfileActions from '../../actions/profile';
import { updatePhotoProfile } from '../../services/profile';

export function* uploadPhotoProfileSaga(): Generator {
  yield takeEvery(
    ProfileActions.requestUploadPhotoAction,
    uploadPhotoProfileWorker
  );
}

function* uploadPhotoProfileWorker({
  payload,
}: ReturnType<typeof ProfileActions.requestUploadPhotoAction>): Generator {
  try {
    const response = yield call(updatePhotoProfile, payload.image);
    if (response) {
      yield put(ProfileActions.successUploadPhotoProfile());
      payload.alert.success('Photo success update!');
      payload.history.push('/home');
    } else {
      put(ProfileActions.errorUploadPhotoProfile());
      payload.alert.error('Error: please try again later');
    }
  } catch (e) {
    put(ProfileActions.errorUploadPhotoProfile());
    payload.alert.error(`Error: ${e.message}`);
  }
}
