// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-xWQ6VNTeQeAWCoXrcQMcffXg2F0iYwI",
  authDomain: "image-gallery-bd99c.firebaseapp.com",
  projectId: "image-gallery-bd99c",
  storageBucket: "image-gallery-bd99c.appspot.com",
  messagingSenderId: "526759575531",
  appId: "1:526759575531:web:0e8edd9c8c1eda555b63ae",
  measurementId: "G-D2EP49NEK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth};
