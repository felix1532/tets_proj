import { call, put, takeEvery } from 'redux-saga/effects';
import * as ActionsAuth from '../../actions/auth';
import * as AuthService from '../../services/authentication';

export function* logOutSaga(): Generator {
  yield takeEvery(ActionsAuth.signingOutAction, logOutWorker);
}

export function* logOutWorker({
  payload,
}: ReturnType<typeof ActionsAuth.signingInAction>): Generator {
  try {
    yield call(AuthService.signOut);
    yield put(ActionsAuth.successSignOutAction());
    payload.history.push('/');
    payload.alert.success('Success Log Out !');
  } catch (error) {
    yield put(ActionsAuth.errorSignOutAction(error.message));
    payload.alert.error(`Error: ${error.message}`);
  }
}
