import { createAction } from 'redux-actions';

export enum AuthActionTypes {
  SIGN_IN = '[Authentication] SIGN_IN',
  SUCCESS_SIGN_IN = '[Authentication] SUCCESS_SIGN_IN',
  ERROR_SIGN_IN = '[Authentication] ERROR_SIGN_IN',

  SIGNING_OUT = '[Authentication] SIGNING_OUT',
  SUCCESS_SIGN_OUT = '[Authentication] SUCCESS_SIGN_OUT',
  ERROR_SIGN_OUT = '[Authentication] ERROR_SIGN_OUT',

  REGISTER = '[Authentication] REGISTER',
  SUCCESS_REGISTER = '[Authentication] SUCCESS_REGISTER',
  ERROR_REGISTER = '[Authentication] ERROR_REGISTER',
}

export const signingInAction = createAction(AuthActionTypes.SIGN_IN);
export const successSignInAction = createAction(
  AuthActionTypes.SUCCESS_SIGN_IN
);
export const errorSignInAction = createAction(
  AuthActionTypes.ERROR_SIGN_IN,
  (payload: { error: string }) => payload
);

export const signingOutAction = createAction(AuthActionTypes.SIGNING_OUT);
export const successSignOutAction = createAction(
  AuthActionTypes.SUCCESS_SIGN_OUT
);
export const errorSignOutAction = createAction(
  AuthActionTypes.ERROR_SIGN_OUT,
  (payload: { error: string }) => payload
);

export const registerAction = createAction(AuthActionTypes.REGISTER);
export const successRegisterAction = createAction(
  AuthActionTypes.SUCCESS_REGISTER
);
export const errorRegisterAction = createAction(
  AuthActionTypes.ERROR_REGISTER,
  (payload: { error: string }) => payload
);
