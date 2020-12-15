import { createAction } from 'redux-actions';
import * as H from 'history';
import { AlertManager } from 'react-alert';

export enum AuthActionTypes {
  SIGN_IN = '[AUTH] SIGN_IN',
  SUCCESS_SIGN_IN = '[AUTH] SUCCESS_SIGN_IN',
  ERROR_SIGN_IN = '[AUTH] ERROR_SIGN_IN',

  SIGNING_OUT = '[AUTH] SIGNING_OUT',
  SUCCESS_SIGN_OUT = '[AUTH] SUCCESS_SIGN_OUT',
  ERROR_SIGN_OUT = '[AUTH] ERROR_SIGN_OUT',

  REGISTER = '[AUTH] REGISTER',
  SUCCESS_REGISTER = '[AUTH] SUCCESS_REGISTER',
  ERROR_REGISTER = '[AUTH] ERROR_REGISTER',
}

export const signingInAction = createAction<{
  login: string;
  password: string;
  history: H.History;
  alert: AlertManager;
}>(AuthActionTypes.SIGN_IN);
export const successSignInAction = createAction(
  AuthActionTypes.SUCCESS_SIGN_IN
);
export const errorSignInAction = createAction(
  AuthActionTypes.ERROR_SIGN_IN,
  (payload: { error: string }) => payload
);

export const signingOutAction = createAction<{
  history: H.History;
  alert: AlertManager;
}>(AuthActionTypes.SIGNING_OUT);
export const successSignOutAction = createAction(
  AuthActionTypes.SUCCESS_SIGN_OUT
);
export const errorSignOutAction = createAction(
  AuthActionTypes.ERROR_SIGN_OUT,
  (payload: { error: string }) => payload
);

export const registerAction = createAction<{
  name: string;
  surname: string;
  email: string;
  password: string;
  history: H.History;
  alert: AlertManager;
}>(AuthActionTypes.REGISTER);
export const successRegisterAction = createAction(
  AuthActionTypes.SUCCESS_REGISTER
);
export const errorRegisterAction = createAction(
  AuthActionTypes.ERROR_REGISTER,
  (payload: { error: string }) => payload
);
