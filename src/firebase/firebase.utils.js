// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_LPGvdkgJ0_Rwdn_wdL2UgnAXxmAfHwo",
    authDomain: "ecommerce-cloth-5dd7b.firebaseapp.com",
    projectId: "ecommerce-cloth-5dd7b",
    storageBucket: "ecommerce-cloth-5dd7b.appspot.com",
    messagingSenderId: "986073070819",
    appId: "1:986073070819:web:4c07a0e3a22c3e722219d6",
    measurementId: "G-J0P841FG0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const firestore = getFirestore(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// export default firebase;