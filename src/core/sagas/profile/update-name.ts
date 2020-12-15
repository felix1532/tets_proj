import { call, put, takeEvery } from 'redux-saga/effects';
import * as ProfileActions from '../../actions/profile';
import { updateNameProfile } from '../../services/profile';

export function* updateNameProfileSaga(): Generator {
  yield takeEvery(
    ProfileActions.requestUpdateNameProfile,
    updateNameProfileWorker
  );
}

function* updateNameProfileWorker({
  payload,
}: ReturnType<typeof ProfileActions.requestUpdateNameProfile>): Generator {
  try {
    yield call(updateNameProfile, payload.name);
    yield put(ProfileActions.successUpdateNameProfile());
    payload.alert.success('Name success update!');
    payload.history.push('/home');
  } catch (e) {
    put(ProfileActions.errorUpdateNameProfile());
    payload.alert.error(`Error: ${e.message}`);
  }
}
