// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkReHZVGkvx50DVLLXAEyyFnXmK6bjuhw",
  authDomain: "altschool-exam-project-9418c.firebaseapp.com",
  projectId: "altschool-exam-project-9418c",
  storageBucket: "altschool-exam-project-9418c.appspot.com",
  messagingSenderId: "41186601860",
  appId: "1:41186601860:web:79a60e6516e630311b8bd1",
  measurementId: "G-6ZP5KG98E9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
