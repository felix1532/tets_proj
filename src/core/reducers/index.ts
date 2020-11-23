import { combineReducers } from 'redux';
import * as Auth from './authentication'
import * as Profile from './profile'


export interface AppStates { 
	signIn: Auth.State;
	profile: Profile.State
}

export const rootReducer = combineReducers<AppStates>({
	signIn: Auth.signInReducer,
	profile: Profile.profileReducer
});