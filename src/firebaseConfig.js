
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNH0OCV-Dww2V6woHiSYxYNuJJX_OOsaU",
  authDomain: "vivek1-blog.firebaseapp.com",
  projectId: "vivek1-blog",
  storageBucket: "vivek1-blog.appspot.com",
  messagingSenderId: "412554520814",
  appId: "1:412554520814:web:4a778fdc813fd2e617abff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth};