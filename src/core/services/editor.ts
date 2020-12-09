import firebase from 'firebase';
import { uuid } from 'uuidv4';

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
        .child(`photo: ${uuid()}`)
        .put(blob)
    : Promise.resolve(null);
};
