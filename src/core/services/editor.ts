import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

export const uploadImage = async (
  image: string,
  name: string
): Promise<firebase.storage.UploadTask> => {
  const user = firebase.auth().currentUser;
  const blob = await fetch(image).then((response) => response.blob());

  return user
    ? firebase
        .storage()
        .ref()
        .child('library')
        .child(user.uid)
        .child(name ? name : `photo: ${uuidv4()}`)
        .put(blob)
    : Promise.resolve(null);
};
