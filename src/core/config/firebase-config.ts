import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDDKAYoayeJ51Ry7sLFTdeRs562i56U-H4',
  authDomain: 'test-project-1a324.firebaseapp.com',
  projectId: 'test-project-1a324',
  storageBucket: 'test-project-1a324.appspot.com',
  messagingSenderId: '963443967112',
  appId: '1:963443967112:web:6ee56c8004111799934b3d',
};

export const authentication = firebase.initializeApp(firebaseConfig).auth();
