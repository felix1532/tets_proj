import firebase from 'firebase';

export const signIn = (
  login: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return firebase.auth().signInWithEmailAndPassword(login, password);
};

export const signOut = (): Promise<void> => {
  return firebase.auth().signOut();
};

export const register = (
  name: string,
  surname: string,
  email: string,
  password: string
): Promise<void> => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //Firestore
      firebase
        .firestore()
        .collection('users')
        .doc(userCredential.user?.uid)
        .set({ email, name, surname });
    });
};
