import { Dispatch } from 'redux';
import * as ProfileActions from '../actions/profile';
import * as ProfileServices from '../services/profile';
import * as H from 'history';
import { AlertManager } from 'react-alert';

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

export function uploadPhotoProfile(
  image: string,
  history: H.History,
  alert: AlertManager
) {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startUploadPhotoAction());
    ProfileServices.updatePhotoProfile(image)
      .then((resolve) => {
        if (resolve) {
          dispatch(ProfileActions.successUploadPhotoProfile());
          alert.success('Photo success update!');
          history.push('/home');
        } else {
          dispatch(ProfileActions.errorUploadPhotoProfile());
          alert.error('Error: please try again later');
        }
      })
      .catch((error) => {
        dispatch(ProfileActions.errorUploadPhotoProfile());
        alert.error(`Error: ${error.message}`);
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
          dispatch(ProfileActions.errorDownloadPhotoProfile());
        }
      })
      .catch(() => {
        dispatch(ProfileActions.errorDownloadPhotoProfile());
      });
  };
}

export function updateNameProfile(
  name: string,
  history: H.History,
  alert: AlertManager
) {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startUpdateNameProfile());
    ProfileServices.updateNameProfile(name)
      .then(() => {
        dispatch(ProfileActions.successUpdateNameProfile());
        alert.success('Name success update!');
        history.push('/home');
      })
      .catch((error) => {
        dispatch(ProfileActions.errorUpdateNameProfile());
        alert.error(`Error: ${error.message}`);
      });
  };
}

export function updateSurnameProfile(
  surname: string,
  history: H.History,
  alert: AlertManager
) {
  return (dispatch: Dispatch): void => {
    dispatch(ProfileActions.startUpdateSurnameProfile());
    ProfileServices.updateSurnameProfile(surname)
      .then(() => {
        dispatch(ProfileActions.successUpdateSurnameProfile());
        alert.success('Surname success update!');
        history.push('/home');
      })
      .catch((error) => {
        dispatch(ProfileActions.errorUpdateSurnameProfile());
        alert.error(`Error: ${error.message}`);
      });
  };
}
