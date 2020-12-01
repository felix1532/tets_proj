import { combineReducers } from 'redux';
import * as Auth from './authentication';
import * as Profile from './profile';
import * as Editor from './editor';
import * as Gallery from './gallery';

export interface AppStates {
  signIn: Auth.State;
  profile: Profile.State;
  editor: Editor.State;
  gallery: Gallery.State;
}

export const rootReducer = combineReducers<AppStates>({
  signIn: Auth.reducer,
  profile: Profile.reducer,
  editor: Editor.reducer,
  gallery: Gallery.reducer,
});
