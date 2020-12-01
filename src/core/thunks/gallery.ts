import { Dispatch } from 'redux';
import * as GalleryActions from '../actions/actions-gallery';
import * as GalleryServices from '../services/gallery';

export function downloadGalleryPhoto() {
  return (dispatch: Dispatch): void => {
    dispatch(GalleryActions.startDownloadPhotoGallery());
    GalleryServices.downloadGalleryPhoto()
      .then((user) => {
        if (user) {
          console.log(user);
          //GalleryActions.successDownloadPhotoGallery(['str']);
        } else {
          GalleryActions.errorDownloadPhotoGallery({
            error: 'Error!',
          });
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
