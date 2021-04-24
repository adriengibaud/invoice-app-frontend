import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBUXAI8xFyE0EMk1yJNbyl3GWSFky3uq3o',
  authDomain: 'invoices-managerio.firebaseapp.com',
  projectId: 'invoices-managerio',
  storageBucket: 'invoices-managerio.appspot.com',
  messagingSenderId: '58819077627',
  appId: '1:58819077627:web:21f35886d87214e267575e',
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
