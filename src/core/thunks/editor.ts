import * as EditorServices from './../services/editor';
import * as EditorActions from '../actions/editor';
import { Dispatch } from 'redux';
import { AlertManager } from 'react-alert';

export function saveImageCanvas(image: string, alert: AlertManager) {
  return (dispatch: Dispatch): void => {
    dispatch(EditorActions.startUploadImgEditor());
    EditorServices.uploadImage(image)
      .then((user) => {
        if (user) {
          dispatch(EditorActions.startUploadImgEditor());
          alert.success('Success upload photo!');
        } else {
          dispatch(EditorActions.errorUploadImgEditor({ error: 'user null' }));
          alert.error('Error upload photo!');
        }
      })
      .catch((error) => {
        dispatch(EditorActions.errorUploadImgEditor(error.message));
        alert.error('Error upload photo!');
      });
  };
}
