import { call, put, takeEvery } from 'redux-saga/effects';
import * as EditorActions from '../../actions/editor';
import { uploadImage } from '../../services/editor';

export function* saveImageCanvasSaga(): Generator {
  yield takeEvery(EditorActions.requestUploadImgEditor, saveImageWorker);
}

function* saveImageWorker({
  payload,
}: ReturnType<typeof EditorActions.requestUploadImgEditor>): Generator {
  try {
    const user = yield call(uploadImage, payload.image, payload.fullPath);
    if (user) {
      yield put(EditorActions.successUploadImgEditor());
      payload.alert.success('Success upload photo!');
    } else {
      yield put(EditorActions.errorUploadImgEditor({ error: 'not found' }));
      payload.alert.error('Error upload photo!');
    }
  } catch (e) {
    yield put(EditorActions.errorUploadImgEditor({ error: e.message }));
    payload.alert.error('Error upload photo!');
  }
}
