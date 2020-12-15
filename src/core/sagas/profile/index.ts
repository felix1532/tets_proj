import { fork } from 'redux-saga/effects';
import { downloadPhotoProfileSaga } from './download-photo';
import { downloadProfileSaga } from './download-text-fields';
import { updateNameProfileSaga } from './update-name';
import { updateSurnameProfileSaga } from './update-surname';
import { uploadPhotoProfileSaga } from './upload-photo';

export default function* profileSaga(): Generator {
  yield fork(downloadProfileSaga);
  yield fork(uploadPhotoProfileSaga);
  yield fork(downloadPhotoProfileSaga);
  yield fork(updateNameProfileSaga);
  yield fork(updateSurnameProfileSaga);
}
