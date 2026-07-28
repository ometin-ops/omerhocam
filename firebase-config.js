import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJkHzzYymPbO3KqfNi_CahZjabncBDS7U",
  authDomain: "omerhocam-ef41c.firebaseapp.com",
  projectId: "omerhocam-ef41c",
  storageBucket: "omerhocam-ef41c.firebasestorage.app",
  messagingSenderId: "194112217298",
  appId: "1:194112217298:web:4c3ab1e62597dd257d8d0b",
  measurementId: "G-BC2MKW2QFT"
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  db
};
