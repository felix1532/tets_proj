import { Dispatch } from 'redux';
import * as AuthService from '../services/authentication';
import * as ActionsAuth from '../actions/actions-auth';
import * as H from 'history';
import { AlertManager } from 'react-alert';

export function signIn(
  login: string,
  password: string,
  history: H.History,
  alert: AlertManager
) {
  return (dispatch: Dispatch): void => {
    dispatch(ActionsAuth.signingInAction());
    AuthService.signIn(login, password)
      .then(() => {
        dispatch(ActionsAuth.successSignInAction());
        alert.success('Success Log In !');
        history.push('/home');
      })
      .catch((error) => {
        dispatch(ActionsAuth.errorSignInAction(error.message));
        alert.error(`Error: ${error.message}`);
      });
  };
}

export function signOut(history: H.History, alert: AlertManager) {
  return (dispatch: Dispatch): void => {
    dispatch(ActionsAuth.signingOutAction());
    AuthService.signOut()
      .then(() => {
        dispatch(ActionsAuth.successSignOutAction());
        alert.success('Success Log Out !');
        history.push('/');
      })
      .catch((error) => {
        dispatch(ActionsAuth.errorSignOutAction(error.message));
        alert.error(`Error: ${error.message}`);
      });
  };
}

export function register(
  name: string,
  surname: string,
  email: string,
  password: string,
  history: H.History,
  alert: AlertManager
) {
  return (dispatch: Dispatch): void => {
    dispatch(ActionsAuth.registerAction());
    AuthService.register(name, surname, email, password)
      .then(() => {
        dispatch(ActionsAuth.successRegisterAction());
        alert.success('Success registered!');
        history.push('/');
      })
      .catch((error) => {
        dispatch(ActionsAuth.errorRegisterAction(error.message));
        alert.error(`Error: ${error}`);
      });
  };
}
