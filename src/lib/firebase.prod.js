import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

    // Show database with hooks
    // we need config
const config = {
    apiKey: "AIzaSyAtBSLHED6OogZ0uek6TuskcN5DACEa26w",
    authDomain: "futflix-7b08c.firebaseapp.com",
    projectId: "futflix-7b08c",
    storageBucket: "futflix-7b08c.appspot.com",
    messagingSenderId: "188238854853",
    appId: "1:188238854853:web:ffa827abd14840b5184eac"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };