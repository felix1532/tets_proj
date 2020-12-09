import { AlertManager } from 'react-alert';
import { Dispatch } from 'redux';
import * as GalleryActions from '../actions/gallery';
import { ItemGallery } from '../interfaces/item-gallery';
import * as GalleryServices from '../services/gallery';

export function downloadGalleryPhoto() {
  return (dispatch: Dispatch): void => {
    dispatch(GalleryActions.startDownloadPhotoGallery());
    GalleryServices.downloadGalleryPhoto()
      .then((listPromises) => {
        if (listPromises) {
          Promise.all(listPromises).then((list: Array<ItemGallery>) => {
            Promise.all(list.map((item: ItemGallery) => item.photo)).then(
              (listPhoto: Array<firebase.default.storage.Reference>) => {
                const arrayPhotos = listPhoto.map(
                  (
                    photo: firebase.default.storage.Reference,
                    index: number
                  ) => {
                    return {
                      photo: `${photo}`,
                      fullPath: list[index].fullPath,
                    };
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
