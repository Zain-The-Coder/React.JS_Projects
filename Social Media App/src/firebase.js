import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA1Otg6yB_MTuif_QM1hlEMVr7aadGJucw",
  authDomain: "socialmediaapp-4e4c9.firebaseapp.com",
  projectId: "socialmediaapp-4e4c9",
  storageBucket: "socialmediaapp-4e4c9.firebasestorage.app",
  messagingSenderId: "363437583820",
  appId: "1:363437583820:web:bc60b4df80741b136a0169",
  measurementId: "G-N79J1Q8HBK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);