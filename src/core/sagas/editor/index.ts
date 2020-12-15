import { fork } from 'redux-saga/effects';
import { saveImageCanvasSaga } from './save-image';

export default function* editorSagas(): Generator {
  yield fork(saveImageCanvasSaga);
}
