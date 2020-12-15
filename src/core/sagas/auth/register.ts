import { takeEvery, put, call } from 'redux-saga/effects';
import * as ActionsAuth from '../../actions/auth';
import * as AuthService from '../../services/authentication';

export function* registerSaga(): Generator {
  yield takeEvery(ActionsAuth.registerAction, registerWorker);
}

export function* registerWorker({
  payload,
}: ReturnType<typeof ActionsAuth.registerAction>): Generator {
  try {
    yield call(
      AuthService.register,
      payload.name,
      payload.surname,
      payload.email,
      payload.password
    );
    yield put(ActionsAuth.successRegisterAction());
    payload.history.push('/');
    payload.alert.success('Success registered!');
  } catch (error) {
    yield put(ActionsAuth.errorRegisterAction(error.message));
    payload.alert.error(`Error: ${error}`);
  }
}
