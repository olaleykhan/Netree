// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAqznaPRsHc-n_nhP0PAfk0CdqcJ--KRo",
  authDomain: "netree-lekan.firebaseapp.com",
  projectId: "netree-lekan",
  storageBucket: "netree-lekan.appspot.com",
  messagingSenderId: "504062128860",
  appId: "1:504062128860:web:0811c777e4dd4e225eba19",
  measurementId: "G-2B4EPFFM13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);