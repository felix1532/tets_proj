import { all } from 'redux-saga/effects';
import authSagas from './auth';
import editorSagas from './editor';
import { gallerySaga } from './gallery';
import profileSaga from './profile';

export default function* sagas(): Generator {
  yield all([profileSaga(), authSagas(), editorSagas(), gallerySaga()]);
}
