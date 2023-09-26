import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyB-xWQ6VNTeQeAWCoXrcQMcffXg2F0iYwI",
  authDomain: "image-gallery-bd99c.firebaseapp.com",
  projectId: "image-gallery-bd99c",
  messagingSenderId: "526759575531",
  appId: "1:526759575531:web:0e8edd9c8c1eda555b63ae",
  measurementId: "G-D2EP49NEK2",
  storageBucket: "gs://image-gallery-bd99c.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//create storage
export const storage = getStorage(app);