import { AlertManager } from 'react-alert';
import { Dispatch } from 'redux';
import * as GalleryActions from '../actions/actions-gallery';
import * as GalleryServices from '../services/gallery';

export function downloadGalleryPhoto() {
  return (dispatch: Dispatch): void => {
    dispatch(GalleryActions.startDownloadPhotoGallery());
    GalleryServices.downloadGalleryPhoto()
      .then((user) => {
        if (user) {
          Promise.all(user).then((values: any) => {
            Promise.all(values.map((item: any) => item.photo)).then(
              (listPhoto: any) => {
                const arrayPhotos = listPhoto.map(
                  (val: string, index: number) => {
                    return { photo: val, fullPath: values[index].fullPath };
                  }
                );

                dispatch(
                  GalleryActions.successDownloadPhotoGallery(arrayPhotos)
                );
              }
            );
          });
        } else {
          dispatch(
            GalleryActions.errorDownloadPhotoGallery({
              error: 'Error!',
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          GalleryActions.errorDownloadPhotoGallery({
            error: error.message,
          })
        );
      });
  };
}

export function deletePhotoGallery(fullPath: string, alert: AlertManager) {
  return (dispatch: Dispatch): void => {
    dispatch(GalleryActions.startDeletePhotoGallery());
    GalleryServices.deletePhotoGallery(fullPath)
      .then(() => {
        dispatch(GalleryActions.successDeletePhotoGallery());
        alert.success('Photo deleted!');
        dispatch(GalleryActions.deleteElementById(fullPath));
      })
      .catch((error) => {
        dispatch(GalleryActions.errorDeletePhotoGallery(error.message));
        alert.success('Error deleted photo!');
      });
  };
}
