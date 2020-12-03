import firebase from 'firebase';

export const downloadGalleryPhoto = async (): Promise<any> => {
  const user = firebase.auth().currentUser;
  const listPhoto = await firebase
    .storage()
    .ref()
    .child('library')
    .child(user.uid)
    .list();
  return listPhoto.items.map(async (photo) => await photo.getDownloadURL());
};
