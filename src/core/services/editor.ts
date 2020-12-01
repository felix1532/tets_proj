import firebase from 'firebase';

export const uploadImage = async (
  image: string
): Promise<firebase.storage.UploadTask> => {
  const user = firebase.auth().currentUser;
  const blob = await fetch(image).then((response) => response.blob());

  return user
    ? firebase
        .storage()
        .ref()
        .child('library')
        .child(user.uid)
        .child('photo:' + Date.now())
        .put(blob)
    : Promise.resolve(null);
};
