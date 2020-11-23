import { Dispatch } from 'redux';
import * as ProfileActions from '../actions/actions-profile';
import * as ProfileServices from '../services/profile';
import * as H from 'history';

export function downloadProfile() {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startProfileLoadAction());
    ProfileServices.loadProfile()
      .then((user) => {
        if (user) {
          dispatch(ProfileActions.successProfileLoadAction(user.data()));
        } else {
          ProfileActions.errorProfileLoadAction({
            error: 'Error!',
          });
        }
      })
      .catch(() => {
        dispatch(
          ProfileActions.errorProfileLoadAction({
            error: 'Cannot Find user!',
          })
        );
      });
  };
}

export function uploadPhotoProfile(image: string, history: H.History) {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startUploadPhotoAction());
    ProfileServices.updatePhotoProfile(image)
      .then((resolve) => {
        if (resolve) {
          dispatch(ProfileActions.successUploadPhotoProfile());
          history.push('/home');
        } else {
          dispatch(ProfileActions.errorUploadPhotoProfile());
        }
      })
      .catch(() => {
        dispatch(ProfileActions.errorUploadPhotoProfile());
      });
  };
}

export function downloadPhotoProfile() {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startDownloadPhotoAction());
    ProfileServices.downloadPhotoProfile()
      .then((user) => {
        if (user) {
          dispatch(ProfileActions.successDownloadPhotoProfile(user));
        } else {
          dispatch(ProfileActions.errorDownloadPhotoProfile({ url: '' }));
        }
      })
      .catch(() => {
        dispatch(ProfileActions.errorDownloadPhotoProfile({ url: '' }));
      });
  };
}

export function updateNameProfile(name: string, history: H.History) {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startUpdateNameProfile());
    ProfileServices.updateNameProfile(name)
      .then((resolve) => {
        if (resolve) {
          dispatch(ProfileActions.successUpdateNameProfile());
          history.push('/home');
        } else {
          dispatch(ProfileActions.errorUpdateNameProfile());
        }
      })
      .catch(() => {
        dispatch(ProfileActions.errorUpdateNameProfile());
      });
  };
}

export function updateSurnameProfile(surname: string, history: H.History) {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startUpdateSurnameProfile());
    ProfileServices.updateSurnameProfile(surname)
      .then(() => {
        dispatch(ProfileActions.successUpdateSurnameProfile());
        history.push('/home');
      })
      .catch(() => {
        dispatch(ProfileActions.errorUpdateSurnameProfile());
      });
  };
}
