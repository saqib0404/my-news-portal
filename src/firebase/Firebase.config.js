// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGTkcw0gzgYce1Q5B9l7HVoI_WLdKMebg",
    authDomain: "my-news-portal-33d4a.firebaseapp.com",
    projectId: "my-news-portal-33d4a",
    storageBucket: "my-news-portal-33d4a.appspot.com",
    messagingSenderId: "736661603328",
    appId: "1:736661603328:web:0f533d26379806487bc4e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;