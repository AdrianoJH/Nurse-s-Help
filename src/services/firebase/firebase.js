import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBfGdaLpkLdxmLkz9Dq_NoflHHgyqJs02I",
    authDomain: "nurses-help-dc1e0.firebaseapp.com",
    projectId: "nurses-help-dc1e0",
    storageBucket: "nurses-help-dc1e0.appspot.com",
    messagingSenderId: "98137366146",
    appId: "1:98137366146:web:bda509d19a71cbe9f71e9b",
    measurementId: "G-K1N7F91KMG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);