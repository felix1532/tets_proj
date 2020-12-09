import firebase from 'firebase';
import { ItemGallery } from '../interfaces/item-gallery';

export const downloadGalleryPhoto = async (): Promise<
  Array<Promise<ItemGallery>>
> => {
  const user = firebase.auth().currentUser;
  const listPhoto = await firebase
    .storage()
    .ref()
    .child('library')
    .child(user.uid)
    .list();
  return listPhoto.items.map(
    async (photo) =>
      await {
        photo: photo.getDownloadURL(),
        fullPath: photo.fullPath,
        //timeCreated: photo.getMetadata(),
      }
  );
};

export const deletePhotoGallery = (
  fullPath: string
): Promise<firebase.storage.Reference> => {
  return firebase.storage().ref(fullPath).delete();
};
