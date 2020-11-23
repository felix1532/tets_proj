import firebase from 'firebase';

export const loadProfile = (): Promise<
  firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
> => {
  const user = firebase.auth().currentUser;
  return user
    ? firebase.firestore().collection('users').doc(user.uid).get()
    : Promise.resolve(null);
};

export const updatePhotoProfile = async (
  image: string
): Promise<firebase.storage.UploadTask> => {
  const user = firebase.auth().currentUser;
  const blob = await fetch(image).then((response) => response.blob());
  return user
    ? firebase.storage().ref().child('photos').child(user.uid).put(blob)
    : Promise.resolve(null);
};

export const downloadPhotoProfile = (): Promise<{ url: string }> => {
  const user = firebase.auth().currentUser;
  return user
    ? firebase.storage().ref().child('photos').child(user.uid).getDownloadURL()
    : Promise.resolve(null);
};

export const updateNameProfile = (
  name: string
): Promise<firebase.firestore.UpdateData> => {
  const user = firebase.auth().currentUser;
  return user
    ? firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .update({ name: name })
    : Promise.resolve(null);
};

export const updateSurnameProfile = (
  surname: string
): Promise<firebase.firestore.UpdateData> => {
  const user = firebase.auth().currentUser;
  return user
    ? firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .update({ surname: surname })
    : Promise.resolve(null);
};
