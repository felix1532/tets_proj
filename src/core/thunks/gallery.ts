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
            dispatch(GalleryActions.successDownloadPhotoGallery(values));
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
