import firebase from 'firebase';

export const downloadGalleryPhoto = async (): Promise<any> => {
  const user = firebase.auth().currentUser;
  const listPhoto = await firebase
    .storage()
    .ref()
    .child('library')
    .child(user.uid)
    .list();
  return listPhoto.items.map(
    async (photo) =>
      await { photo: photo.getDownloadURL(), fullPath: photo.fullPath }
  );
};

export const deletePhotoGallery = (
  fullPath: string
): Promise<firebase.storage.Reference> => {
  return firebase.storage().ref(fullPath).delete();
};
