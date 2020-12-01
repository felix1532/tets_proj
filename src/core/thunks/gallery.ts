import { Dispatch } from 'redux';
import * as GalleryActions from '../actions/actions-gallery';
import * as GalleryServices from '../services/gallery';

export function downloadGalleryPhoto() {
  return (dispatch: Dispatch): void => {
    dispatch(GalleryActions.startDownloadPhotoGallery());
    GalleryServices.downloadGalleryPhoto()
      .then((user) => {
        if (user) {
          const listPhoto: Array<string> = [];
          user.items.map(async (item) =>
            listPhoto.push(await item.getDownloadURL())
          );
          dispatch(
            GalleryActions.successDownloadPhotoGallery({ listPhoto: listPhoto })
          );
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
