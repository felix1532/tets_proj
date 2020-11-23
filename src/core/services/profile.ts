import firebase from 'firebase';

export const loadProfile = (): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> | null  => {
	const user = firebase.auth().currentUser;
	return user && firebase.firestore().collection('users').doc(user.uid).get()
};

export const updatePhotoProfile = async (image: string) => { 
	const user = firebase.auth().currentUser;
	const blob = await fetch(image).then((response) => response.blob());
	return user && firebase.storage().ref().child('photos').child(user.uid).put(blob);
}

export const downloadPhotoProfile = () => { 
	const user = firebase.auth().currentUser;
	return user && firebase.storage().ref().child('photos').child(user.uid).getDownloadURL()
}

export const updateNameProfile = (name: string) => {
	const user = firebase.auth().currentUser;
	return user && firebase.firestore().collection('users').doc(user.uid).update({"name": name})
}

export const updateSurnameProfile = (surname: string) => {
	const user = firebase.auth().currentUser;
	return user && firebase.firestore().collection('users').doc(user.uid).update({"surname": surname})
}