import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

    // Show database with hooks
    // we need config
const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };