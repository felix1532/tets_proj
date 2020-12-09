import {
  takeEvery,
  put,
  call,
  CallEffect,
  PutEffect,
  ForkEffect,
} from 'redux-saga/effects';
import { AuthActionTypes } from '../actions/auth';
import * as ActionsAuth from '../actions/auth';
import * as AuthService from '../services/authentication';
import { Action, AnyAction } from 'redux';

export function* auth(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(AuthActionTypes.SIGN_IN, signIn);
  yield takeEvery(AuthActionTypes.SIGNING_OUT, logOut);
}

export function* signIn(
  action: AnyAction
): Generator<
  CallEffect<firebase.default.auth.UserCredential> | PutEffect<Action<any>>
> {
  try {
    yield call(
      AuthService.signIn,
      action.payload.login,
      action.payload.password
    );
    yield put(ActionsAuth.successSignInAction());
    const history = action.payload.history;
    history.push('/home');
    const alert = action.payload.alert;
    alert.success('Success Log In !');
  } catch (error) {
    yield put(ActionsAuth.errorSignInAction(error.message));
  }
}

export function* logOut(
  action: AnyAction
): Generator<CallEffect<void> | PutEffect<Action<any>>, void, unknown> {
  try {
    yield call(AuthService.signOut);
    yield put(ActionsAuth.successSignOutAction());
    const history = action.payload.history;
    history.push('/');
    const alert = action.payload.alert;
    alert.success('Success Log Out !');
  } catch (error) {
    yield put(ActionsAuth.successSignOutAction(error.message));
  }
}
