import firebase from 'firebase/app'
import 'firebase/auth'

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBEKYEix9i9UO0khhnUWx9KIG8SZ9HSK0k",
    authDomain: "react-test-project-aabff.firebaseapp.com",
    databaseURL: "https://react-test-project-aabff.firebaseio.com",
    projectId: "react-test-project-aabff",
    storageBucket: "react-test-project-aabff.appspot.com",
    messagingSenderId: "280780329134",
    appId: "1:280780329134:web:c4da835912a65f33b7dd3f"
});

export const auth = app.auth()
export default app

