// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, collection, doc, setDoc, addDoc, query, where } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

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
export const firestore = getFirestore();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    try {
        const { displayName, email, uid } = userAuth;
        const userRef = await doc(firestore, "users", userAuth.uid)
        let docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            console.log("No such document!");

            const { displayName, email } = userAuth;
            const createdAt = new Date();

            await setDoc(userRef, {
                displayName, email, createdAt, ...additionalData
            });
            return { id: uid, data: () => { return { displayName, email } } };
        } else {
            // console.log("Document data:", docSnap);
            // console.log("Document data:", docSnap.data());
            return docSnap

        }
    } catch (error) {
        console.log(error.message);
    }
}

export const createUserDateWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}