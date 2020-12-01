import firebase from 'firebase';

export const downloadGalleryPhoto = (): Promise<firebase.storage.ListResult> => {
  const user = firebase.auth().currentUser;
  return user
    ? firebase
        .storage()
        .ref()
        .child('library')
        .child(user.uid)
        .listAll()
        .then((list) => list.items.map((item) => item.getDownloadURL()))
    : Promise.resolve(null);
};
