import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyD-RTl0DG583tAuFNjpzVHPt8Y56KhI6jU",
     authDomain: "movieapp-5f146.firebaseapp.com",
     databaseURL: "https://movieapp-5f146-default-rtdb.firebaseio.com",
     projectId: "movieapp-5f146",
     storageBucket: "movieapp-5f146.appspot.com",
     messagingSenderId: "644910719527",
     appId: "1:644910719527:web:968151914407b70423e402",
     measurementId: "G-8P5B0D8Q9G"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 //seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
