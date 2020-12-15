import * as GalleryActions from '../../actions/gallery';

import { call, put, takeEvery } from 'redux-saga/effects';
import { ItemGallery } from '../../interfaces/item-gallery';
import { downloadGalleryPhoto } from '../../services/gallery';
import { ListGallery } from '../../interfaces/list-gallery';

export function* downloadGalleryImage(): Generator {
  yield takeEvery(
    GalleryActions.requestDownloadPhotoGallery,
    downloadPhotoGalleryWorker
  );
}

function* downloadPhotoGalleryWorker(): Generator {
  try {
    const listPromises = yield call(downloadGalleryPhoto);
    if (listPromises) {
      const responseListPromises = yield Promise.all(
        listPromises as Promise<ItemGallery>[]
      );
      const listPhoto = yield Promise.all(
        (responseListPromises as Array<ItemGallery>).map((list) => list.photo)
      );
      const listMetadata = yield Promise.all(
        (responseListPromises as Array<ItemGallery>).map(
          (list) => list.timeCreated
        )
      );
      const listGallery: Array<ListGallery> = (listPhoto as firebase.default.storage.Reference[]).map(
        (item, index) => {
          return {
            photo: `${item}`,
            timeCreated: `${
              (listMetadata as firebase.default.storage.FullMetadata[])[index]
                .timeCreated
            }`,
            fullPath: (responseListPromises as ItemGallery[])[index].fullPath,
          };
        }
      );
      yield put(GalleryActions.successDownloadPhotoGallery(listGallery));
    } else {
      put(
        GalleryActions.errorDownloadPhotoGallery({
          error: 'Error!',
        })
      );
    }
  } catch (e) {
    put(
      GalleryActions.errorDownloadPhotoGallery({
        error: e.message,
      })
    );
  }
}
