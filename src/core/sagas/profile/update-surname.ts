import { call, put, takeEvery } from 'redux-saga/effects';
import * as ProfileActions from '../../actions/profile';
import { updateSurnameProfile } from '../../services/profile';

export function* updateSurnameProfileSaga(): Generator {
  yield takeEvery(
    ProfileActions.requestUpdateSurnameProfile,
    updateSurnameProfileWorker
  );
}

function* updateSurnameProfileWorker({
  payload,
}: ReturnType<typeof ProfileActions.requestUpdateSurnameProfile>): Generator {
  try {
    yield call(updateSurnameProfile, payload.surname);
    yield put(ProfileActions.successUpdateSurnameProfile());
    payload.alert.success('Surname success update!');
    payload.history.push('/home');
  } catch (e) {
    put(ProfileActions.errorUpdateNameProfile());
    payload.alert.error(`Error: ${e.message}`);
  }
}
