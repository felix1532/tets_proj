import { createAction } from 'redux-actions';
import { AuthActionTypes } from './types-actions/auth-types'


export const signingInAction = createAction(AuthActionTypes.SIGN_IN);
export const successSignInAction = createAction(AuthActionTypes.SUCCESS_SIGN_IN);
export const errorSignInAction = createAction(AuthActionTypes.ERROR_SIGN_IN, (payload: { error: string }) => payload);

export const signingOutAction = createAction(AuthActionTypes.SIGNING_OUT);
export const successSignOutAction = createAction(AuthActionTypes.SUCCESS_SIGN_OUT);
export const errorSignOutAction = createAction(AuthActionTypes.ERROR_SIGN_OUT, (payload: { error: string }) => payload);

export const registerAction = createAction(AuthActionTypes.REGISTER);
export const successRegisterAction = createAction(AuthActionTypes.SUCCESS_REGISTER);
export const errorRegisterAction = createAction(AuthActionTypes.ERROR_REGISTER, (payload: { error: string }) => payload);
