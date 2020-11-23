import { Dispatch } from 'redux';
import * as ProfileActions from '../actions/actions-profile'
import * as ProfileServices from '../services/profile'
import * as H from 'history';

export function downloadProfile() {
	return  (dispatch: Dispatch) => {
		dispatch(ProfileActions.startProfileLoadAction());
		const userUpdateProfile = ProfileServices.loadProfile();
		try {
			if (userUpdateProfile) userUpdateProfile.then((user) => {
				dispatch(ProfileActions.successProfileLoadAction(user.data()))
			}).catch(() => {
				dispatch(ProfileActions.errorProfileLoadAction({error: 'Cannot Find user!'}))
			})
		} catch(error){ 
			dispatch(ProfileActions.errorProfileLoadAction({...error.message}))
		}
	}
}


export function uploadPhotoProfile(image: string, history: H.History) { 
	return (dispatch: Dispatch)  => {
		dispatch(ProfileActions.startUploadPhotoAction());
		ProfileServices.updatePhotoProfile(image).then(() => { 
			dispatch(ProfileActions.successUploadPhotoProfile())
			history.push('/home')
		}).catch(() => {
			dispatch(ProfileActions.errorUploadPhotoProfile())
		})
	}
}


export function downloadPhotoProfile() {
	return  (dispatch: Dispatch) => {
		dispatch(ProfileActions.startDownloadPhotoAction());
		const userDownloadPhoto = ProfileServices.downloadPhotoProfile();
		try {
			if (userDownloadPhoto) userDownloadPhoto.then((user) => {
				dispatch(ProfileActions.successDownloadPhotoProfile(user))
			}).catch(() => {
				dispatch(ProfileActions.errorDownloadPhotoProfile({ url: '' }))
			})
		} catch(error){ 
			dispatch(ProfileActions.errorDownloadPhotoProfile({  url: '' }))
		}
	}
}

export function updateNameProfile(name:string,history: H.History) { 
	return (dispatch: Dispatch) => { 
		dispatch(ProfileActions.startUpdateNameProfile());
		const userName = ProfileServices.updateNameProfile(name);
		try {
			if (userName) userName.then(() => {
				dispatch(ProfileActions.successUpdateNameProfile())
				history.push('/home')
			}).catch(() => {
				dispatch(ProfileActions.errorUpdateNameProfile())
			})
		} catch{ 
			dispatch(ProfileActions.errorUpdateNameProfile())
		}
	}
}

export function updateSurnameProfile(surname: string,history: H.History) { 
	return (dispatch: Dispatch) => { 
		dispatch(ProfileActions.startUpdateSurnameProfile());
		const userSurname = ProfileServices.updateSurnameProfile(surname);
		try {
			if (userSurname) userSurname.then(() => {
				dispatch(ProfileActions.successUpdateSurnameProfile())
				history.push('/home')
			}).catch(() => {
				dispatch(ProfileActions.errorUpdateSurnameProfile())
			})
		} catch{ 
			dispatch(ProfileActions.errorUpdateSurnameProfile())
		}
	}
}