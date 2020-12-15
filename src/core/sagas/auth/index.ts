import { fork } from 'redux-saga/effects';
import { logOutSaga } from './log-out';
import { registerSaga } from './register';
import { signInSaga } from './sign-in';

export default function* authSagas(): Generator {
  yield fork(signInSaga);
  yield fork(logOutSaga);
  yield fork(registerSaga);
}
