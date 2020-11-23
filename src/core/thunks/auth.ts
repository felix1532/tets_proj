import { Dispatch } from 'redux'
import * as AuthService from '../services/authentication'
import * as ActionsAuth from '../actions/actions-auth'
import * as H from 'history';

export function signIn(login: string, password: string, history: H.History) { 
	return (dispatch: Dispatch): void => {
		dispatch(ActionsAuth.signingInAction());
		AuthService.signIn(login, password)
		.then(() => {
			dispatch(ActionsAuth.successSignInAction());
			history.push('/home');
		})
		.catch((error) => {
			dispatch(ActionsAuth.errorSignInAction(error.message));
		});
	};
}

export function signOut(history: H.History) {
	return (dispatch: Dispatch): void => {
	dispatch(ActionsAuth.signingOutAction());
	AuthService.signOut()
		.then(() => {
		dispatch(ActionsAuth.successSignOutAction());
		history.push('/login');
		})
		.catch((error) => dispatch(ActionsAuth.errorSignOutAction(error.message)));
	};
  }
  
export function register(name: string, surname: string, email: string, password: string, history: H.History, dispatch: Dispatch) { 
	return (dispatch: Dispatch): void =>{ 
		dispatch(ActionsAuth.registerAction());
		AuthService.register(name, surname, email, password).then(() => { 
			dispatch(ActionsAuth.successRegisterAction())
			history.push('/login');
		}).catch((error) => {
			dispatch(ActionsAuth.errorRegisterAction(error.message))
		})

	}
}