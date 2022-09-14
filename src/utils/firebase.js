import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAi86-GFOLuKpW4MeF7iqcszPWVWhRztkc",
    authDomain: "react-ecommerce-92c81.firebaseapp.com",
    projectId: "react-ecommerce-92c81",
    storageBucket: "react-ecommerce-92c81.appspot.com",
    messagingSenderId: "613753688550",
    appId: "1:613753688550:web:b4c17f21921bdd48e04627"
};

// inciamos la conexion del proyecto react con firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);