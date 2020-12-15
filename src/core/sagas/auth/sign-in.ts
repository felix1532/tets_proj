import { takeEvery, put, call } from 'redux-saga/effects';
import * as ActionsAuth from '../../actions/auth';
import * as AuthService from '../../services/authentication';

export function* signInSaga(): Generator {
  yield takeEvery(ActionsAuth.signingInAction, signInWorker);
}

export function* signInWorker({
  payload,
}: ReturnType<typeof ActionsAuth.signingInAction>): Generator {
  try {
    yield call(AuthService.signIn, payload.login, payload.password);
    yield put(ActionsAuth.successSignInAction());
    payload.history.push('/home');
    payload.alert.success('Success Log In !');
  } catch (error) {
    yield put(ActionsAuth.errorSignInAction(error.message));
    payload.alert.error(`Error: ${error.message}`);
  }
}
